import Calendar from '../u-calendar.vue';
const isDate = (o) => ({}.toString.call(o) === '[object Date]' && o.toString() !== 'Invalid Date' && !isNaN(o));
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
export default {
    name: 'u-date-picker',
    props: {
        date: { type: [String, Number, Date], validator: (value) => isDate(new Date(value)) },
        minDate: { type: [String, Number, Date], validator: (value) => isDate(new Date(value)) },
        maxDate: { type: [String, Number, Date], validator: (value) => isDate(new Date(value)) }, //  calendar组件会判断minDate < maxDate
        disabled: { type: Boolean, default: false },
        autofocus: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        placeholder: {
            type: String,
            default: '请选择日期',
        },
        width: { type: [String, Number], default: 154 },
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
    },
    data() {
        return {
            currentDate: this.date,
        };
    },
    watch: {
        date(newValue) {
            this.currentDate = new Date(newValue);
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
        onBeforeChange(event) {
            let cancel = false;
            this.$emit('before-change', {
                preventDefault: () => cancel = true,
            });
            if (cancel)
                event.preventDefault(); // 阻止calendar的change事件
        },
        /**
         * @method select(date) 选择一个日期
         * @public
         * @param  {Date=null} date 选择的日期
         * @return {void}
         */
        select(date) {
            if (this.readonly || this.disabled)
                return;
            this.$refs.calendar.select(date);
            /**
             * @event select 选择某一项时触发
             * @property {object} sender 事件发送对象
             * @property {number} date 当前选择项 返回格式是日期对象
             */
            this.$emit('select', {
                sender: this,
                date: this.returnTime(date),
            });
        },
        /**
         * calendar组件的change事件触发
         * @return {[type]} [description]
         */
        onChange($event) {
            const oldValue = this.currentDate;
            this.currentDate = this.returnTime($event.date);
            this.$emit('change', {
                sender: this,
                date: this.currentDate,
                value: this.currentDate,
                oldValue,
            });

            this.$emit('update:date', this.currentDate);

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
            const date = value ? new Date(value) : null;

            if (date.toString() !== 'Invalid Date') {
                const isOutOfRange = this.$refs.calendar.isOutOfRange(date);
                if (isOutOfRange) {
                    this.currentDate = isOutOfRange;
                    this.$refs.input.value = this.format(this.currentDate, 'yyyy-MM-dd');
                }
                this.$refs.calendar.select(date);
            } else
                this.$refs.input.value = this.format(this.currentDate, 'yyyy-MM-dd');
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
            value = new Date(value);
            return type.replace(trunk, (capture) => maps[capture] ? maps[capture](value) : '');
        },
        transformDate(date) {
            if (typeof date === 'string')
                return new Date(date);
            else if (typeof date === 'number')
                return new Date(date);
            else if (typeof date === 'object')
                return date;
        },
        /**
         * 返回添加时分秒的日期
         * @param  {[type]} date [description]
         */
        returnTime(date) {
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
                    throw new Error('请输入大于0的整数');
                time = this.time < 24 ? this.time + ':00:00' : '23:59:59';
            } else {
                if (!/^[0-9]{1,2}:[0-9]{1,2}:[0-9]{1,2}$/.test(this.time))
                    throw new Error('请输入正确的时分秒格式');
                time = this.time;
            }
            return new Date(this.format(date, 'yyyy/MM/dd') + ' ' + time); // 'yyyy/MM/dd'格式兼容性强
        },
    },
};
