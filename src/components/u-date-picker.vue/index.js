import Calendar from '../u-calendar.vue';
const MS_OF_DAY = 24 * 3600 * 1000;
import { clickOutside } from '../../directives';
import Field from 'proto-ui.vusion/src/components/m-field.vue';
import i18n from './i18n';

/**
 * @class DatePicker
 * @extend Dropdown
 * @param {object}                  options                     =  绑定属性
 * @param {object=null}             options.date               <=> 当前选择的日期
 * @param {string='请输入'}         options.placeholder         => 文本框的占位文字
 * @param {Date|string=null}        options.minDate             => 最小日期，如果为空则不限制
 * @param {Date|string=null}        options.maxDate             => 最大日期，如果为空则不限制
 * @param {boolean=false}           options.autofocus           => 是否自动获得焦点
 * @param {boolean=false}           options.readonly            => 是否只读
 * @param {boolean=false}           options.disabled            => 是否禁用
 */
export const UDatePicker = {
    name: 'u-date-picker',
    i18n,
    props: {
        date: [String, Number, Date],
        minDate: [String, Number, Date],
        maxDate: [String, Number, Date],
        disabled: { type: Boolean, default: false },
        autofocus: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        placeholder: {
            type: String,
            default() { return this.$t('selectDateText'); },
        },
        width: { type: [String, Number], default: 160 },
        alignment: {
            type: String,
            default: 'left',
            validator(value) {
                return ['left', 'right'].includes(value);
            },
        },
        time: {
            type: [String, Number],
            default: 'start',
        },
        yearDiff: {
            type: [String, Number],
            default: 3,
        },
        yearAdd: {
            type: [String, Number],
            default: 1,
        },
        reset: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            showDate: this.format(this.date, 'yyyy-MM-dd'),
            lastDate: '',
        };
    },
    mixins: [Field],
    created() {
        if (this.minDate && this.maxDate) {
            const minDate = new Date(this.minDate);
            const maxDate = new Date(this.maxDate);
            if (minDate / MS_OF_DAY >> 0 > maxDate / MS_OF_DAY >> 0)
                throw new Calendar.DateRangeError(minDate, maxDate);
        }
        this.$emit('input', this.showDate ? new Date(this.showDate.replace(/-/g, '/')) : '');
        // document.addEventListener('click', this.fadeOut, false);
    },
    directives: { clickOutside },
    watch: {
        date(newValue) {
            this.showDate = this.format(newValue, 'yyyy-MM-dd');
        },
        showDate(newValue) {
            /**
             * @event change 日期改变时触发
             * @property {object} sender 事件发送对象
             * @property {number} date 改变后的日期 返回格式为日期对象
             */
            const showDate = this.returnTime(newValue);

            this.$emit('update:date', showDate ? new Date(showDate.replace(/-/g, '/')) : '');

            this.$emit('change', {
                sender: this,
                date: showDate ? new Date(showDate.replace(/-/g, '/')) : '',
            });

            this.$emit('input', showDate ? new Date(showDate.replace(/-/g, '/')) : '');
        },
        minDate(newValue) {
            if (!newValue)
                return;

            if (newValue === 'Invalid Date' || newValue === 'NaN')
                throw new TypeError('Invalid Date');
        },
        maxDate(newValue) {
            if (!newValue)
                return;

            if (newValue === 'Invalid Date' || newValue === 'NaN')
                throw new TypeError('Invalid Date');
        },
    },
    computed: {
        placement() {
            if (this.alignment === 'left')
                return 'bottom-start';
            else if (this.alignment === 'right')
                return 'bottom-end';
        },
    },
    methods: {
        /**
         * @method select(date) 选择一个日期
         * @public
         * @param  {Date=null} date 选择的日期
         * @return {void}
         */
        select(date) {
            if (this.readonly || this.disabled || this.isOutOfRange(date))
                return;

            this.showDate = this.format(date, 'yyyy-MM-dd');

            const showDate = this.returnTime(this.showDate);

            /**
             * @event select 选择某一项时触发
             * @property {object} sender 事件发送对象
             * @property {number} date 当前选择项 返回格式是日期对象
             */
            this.$emit('select', {
                sender: this,
                date: new Date(showDate.replace(/-/g, '/')),
            });

            this.$refs.popper.toggle(false);
        },
        /**
         * @method onInput($event) 输入日期
         * @private
         * @param  {object} $event
         * @return {void}
         */
        onInput($event) {
            const value = $event.target.value;
            let date = value ? new Date(value.replace(/-/g, '/')) : null;
            this.lastDate = this.showDate;
            this.showDate = '';
            if (date !== null && date.toString() !== 'Invalid Date') {
                date = this.isOutOfRange(date) ? this.isOutOfRange(date) : date;
                // 此处有坑 需要特殊处理 由于改成最小值 再次输入不合法的值会变成最小值 认为没有发生变化
                this.showDate = this.format(date, 'yyyy-MM-dd');
            } else
                this.showDate = this.$refs.input.value = this.format(this.lastDate, 'yyyy-MM-dd');
        },
        /**
         * @method isOutOfRange(date) 是否超出规定的日期范围
         * @public
         * @param {Date} date 待测的日期
         * @return {boolean|Date} date 如果没有超出日期范围，则返回false；如果超出日期范围，则返回范围边界的日期
         */
        isOutOfRange(date) {
            let minDate = this.transformDate(this.minDate);
            let maxDate = this.transformDate(this.maxDate);

            // 不要直接在$watch中改变`minDate`和`maxDate`的值，因为有时向外绑定时可能不希望改变它们。
            minDate = minDate && minDate.setHours(0, 0, 0, 0);
            maxDate = maxDate && maxDate.setHours(0, 0, 0, 0);

            // minDate && date < minDate && minDate，先判断是否为空，再判断是否超出范围，如果超出则返回范围边界的日期。
            return (minDate && date < minDate && minDate) || (maxDate && date > maxDate && maxDate);
        },
        /**
         * @method toggle(flag) 是否显示日历组件
         * @public
         * @param {flag} true 显示 false 隐藏
         */
        onToggle($event) {
            this.$emit('toggle', $event);
        },
        format(value, type) {
            if (!value)
                return undefined;
            const fix = (str) => {
                str = '' + (String(str) || '');
                return str.length <= 1 ? '0' + str : str;
            };
            const maps = {
                yyyy(date) { return date.getFullYear(); },
                MM(date) { return fix(date.getMonth() + 1); },
                dd(date) { return fix(date.getDate()); },
                HH(date) { return fix(date.getHours()); },
                mm(date) { return fix(date.getMinutes()); },
                ss(date) { return fix(date.getSeconds()); },
            };
            const trunk = new RegExp(Object.keys(maps).join('|'), 'g');
            type = type || 'yyyy-MM-dd HH:mm';

            if (typeof value === 'string')
                value = value.replace(/-/g, '/');

            value = new Date(value);
            return type.replace(trunk, (capture) => maps[capture] ? maps[capture](value) : '');
        },
        transformDate(date) {
            if (typeof date === 'string')
                return new Date(date.replace(/-/g, '/'));
            else if (typeof date === 'number')
                return new Date(date);
            else if (typeof date === 'object')
                return date;
        },
        returnTime(date) {
            if (!date)
                return;
            let time;
            if (this.time === 'start') {
                // 0:00:00
                time = '0:00:00';
            } else if (this.time === 'morning') {
                // 08:00:00
                time = '8:00:00';
            } else if (this.time === 'end') {
                // 23:59:59
                time = '23:59:59';
            } else if (typeof this.time === 'number') {
                // 具体的时分秒
                if (this.time < 0)
                    throw new Error(this.$t('integerTip'));
                time = this.time < 24 ? this.time + ':00:00' : '23:59:59';
            } else {
                if (!/^[0-9]{1,2}:[0-9]{1,2}:[0-9]{1,2}$/.test(this.time))
                    throw new Error(this.$t('formatErrorTip'));
                time = this.time;
            }
            return date + ' ' + time;
        },
        resetValue() {
            this.showDate = undefined;
        },
    },
};

export default UDatePicker;
