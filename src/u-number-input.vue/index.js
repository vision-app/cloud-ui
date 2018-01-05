/**
 * @class NumberInput
 * @extend Input2
 * @param {object}                  options                    =  绑定属性
 * @param {string=0}                options.value              <=> 文本框的值
 * @param {string=''}               options.state              <=> 文本框的状态
 * @param {number}                  options.min                 => 最小值
 * @param {number}                  options.max                 => 最大值
 * @param {boolean=false}           options.autofocus           => 是否自动获得焦点
 * @param {boolean=false}           options.readonly            => 是否只读
 * @param {boolean=false}           options.disabled            => 是否禁用
 * @param {string='140'}            options.width               => 输入框宽度
 * @param {string='34'}             options.width               => 输入框高度
 */
const NumberInput = {
    name: 'u-number-input',
    props: {
        value: {
            type: [String, Number],
            default: '',
        },
        format: String,
        placeholder: String,
        autofocus: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        min: [String, Number],
        max: [String, Number],
        width: {
            type: [String, Number],
            default: '',
        },
        height: {
            type: [String, Number],
            default: '',
        },
        size: String,
        gap: { type: Number, default: 1 },
    },
    data() {
        return {
            currentValue: this.formatNumber(this.value),
        };
    },
    watch: {
        value(newValue) {
            // 如果超出数值范围，则设置为范围边界的数值
            const isOutOfRange = this.isOutOfRange(newValue);
            if (isOutOfRange !== false)
                return this.$refs.input.set(this.formatNumber(isOutOfRange));
            this.$refs.input.set(this.formatNumber(newValue));
        },
        min(newValue, oldValue) {
            const _max = this.max;
            if (!isNaN(newValue) && newValue - _max > 0)
                throw new NumberInput.NumberRangeError(newValue, _max);

            this.limitToRange();
        },
        max(newValue, oldValue) {
            const _min = this.min;
            if (!isNaN(newValue) && _min - newValue > 0)
                throw new NumberInput.NumberRangeError(_min, newValue);

            this.limitToRange();
        },
    },
    methods: {
        onChange(event) {
            this.currentValue = event.value;
            this.$emit('change', event);
        },
        /**
         * 阻止改变的情况：value不为Number，超出界限，需要format
         * @param  {[type]} event [description]
         * @return {[type]}       [description]
         */
        onBeforeChange(event) {
            if (isNaN(event.newValue)) {
                event.preventDefault();
                return;
            }
            if (this.isOutOfRange(event.newValue)) {
                event.preventDefault();
                this.limitToRange();
                return;
            }
            const formatValue = this.formatNumber(event.newValue);
            if (('' + formatValue) !== ('' + event.newValue)) {
                event.preventDefault();
                setTimeout(() => this.$refs.input.set(formatValue));
                return;
            }

            let cancel = false;
            this.$emit('before-change', {
                newValue: event.newValue,
                oldValue: event.oldValue,
                preventDefault: () => cancel = true,
            });
            if (cancel)
                event.preventDefault();
        },
        onKeyup(event) {
            this.$emit('keyup', event);
        },
        onFocus(event) {
            this.$emit('focus', event);
        },
        onBlur(event) {
            this.$emit('blur', event);
        },
        onInput(event) {
            this.$emit('input', event);
        },
        /**
         * @method add(value) 调整数值
         * @public
         * @param  {number=0} value 加/减的值
         */
        add(isAdd = true) {
            if (this.readonly || this.disabled)
                return;

            this.$refs.input.set(isAdd ? (+this.currentValue + this.gap) : (+this.currentValue - this.gap)); // 更改u-input组件的值
        },
        /**
         * @method isOutOfRange(value) 是否超出规定的数值范围
         * @public
         * @param {number} value 待测的值
         * @return {boolean|number} number 如果没有超出数值范围，则返回false；如果超出数值范围，则返回范围边界的数值
         */
        isOutOfRange(value) {
            const min = +this.min;
            const max = +this.max;

            // min && value < min && min，先判断是否为空，再判断是否超出数值范围，如果超出则返回范围边界的数值
            if (!isNaN(min) && value < min)
                return this.formatNumber(min);
            else if (!isNaN(max) && value > max)
                return this.formatNumber(max);
            else
                return false;
        },
        /**
         * 数据限定在min-max之间
         * @return {[type]} [description]
         */
        limitToRange(preventChange) {
            const isOutOfRange = this.isOutOfRange(this.currentValue);
            if (isOutOfRange !== false)
                this.$refs.input.set(isOutOfRange);
        },
        /**
         * 不足format长度前面补0: 负数补足为 -0001
         * @param  {[type]} value [description]
         * @return {[type]}       [description]
         */
        formatNumber(value) {
            value = +value;
            const isPositive = value >= 0;
            const tempValue = '' + ((isPositive ? value : -value) || 0);
            if (this.format)
                return (isPositive ? '' : '-') + this.format.replace(new RegExp('\\d{0,' + tempValue.length + '}$'), tempValue);
            return value;
        },
        set(value) {
            this.$refs.input.set(value);
        },
    },
};

const NumberRangeError = function (min, max) {
    this.type = 'NumberRangeError';
    this.message = 'Wrong Number Range where `min` is ' + min + ' and `max` is ' + max + '!';
};
NumberRangeError.prototype = Object.create(RangeError.prototype);
NumberInput.NumberRangeError = NumberRangeError.prototype.constructor = NumberRangeError;

export default NumberInput;
