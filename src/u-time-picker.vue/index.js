import NumberInput from '../u-number-input.vue';

const HOUR_MIN = '00';
const MINUTE_MIN = '00';
const SECOND_MIN = '00';
const HOUR_MAX = '23';
const MINUTE_MAX = '59';
const SECOND_MAX = '59';

/**
 * @class TimePicker
 * @extend Component
 * @param {object}                  options.data                     =  绑定属性
 * @param {string='00:00'}          options.data.time               <=> 当前的时间值
 * @param {string='00:00'}          options.data.minTime             => 最小时间
 * @param {string='23:59'}          options.data.maxTime             => 最大时间
 * @param {boolean=false}           options.data.autofocus           => 是否自动获得焦点
 * @param {boolean=false}           options.data.readonly            => 是否只读
 * @param {boolean=false}           options.data.disabled            => 是否禁用
 * @param {boolean=true}            options.data.visible             => 是否显示
 * @param {string=''}               options.data.class               => 补充class
 */
const TimePicker = {
    name: 'u-time-picker',
    props: {
        time: { type: String, default: '00:00:00', validator: (val = '') => {
            const arr = val.split(':').map((item) => +item);
            return arr && arr.length === 3 && !arr.find((item) => isNaN(item) || item < 0);
        } },
        autofocus: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        width: { type: String, default: '56' },
        minTime: {
            type: String,
            default: '00:00:00',
        },
        maxTime: {
            type: String,
            default: '23:59:59',
        },
    },
    data() {
        return {
            currentTime: this.time,
            hourmin: HOUR_MIN,
            hourmax: HOUR_MAX,
            minutemin: MINUTE_MIN,
            minutemax: MINUTE_MAX,
            secondmin: SECOND_MIN,
            secondmax: SECOND_MAX,
        };
    },
    computed: {
        hour() {
            const isOutOfRange = this.isOutOfRange(this.currentTime);
            if (isOutOfRange)
                this.currentTime = isOutOfRange;
            return this.currentTime.split(':')[0];
        },
        minute() {
            const isOutOfRange = this.isOutOfRange(this.currentTime);
            if (isOutOfRange)
                this.currentTime = isOutOfRange;
            return this.currentTime.split(':')[1];
        },
        second() {
            const isOutOfRange = this.isOutOfRange(this.currentTime);
            if (isOutOfRange)
                this.currentTime = isOutOfRange;
            return this.currentTime.split(':')[2];
        },
        sphourmin() {
            return this.minTime.split(':')[0];
        },
        sphourmax() {
            return this.maxTime.split(':')[0];
        },
        spminutemin() {
            return this.minTime.split(':')[1];
        },
        spminutemax() {
            return this.maxTime.split(':')[1];
        },
        spsecondmin() {
            return this.minTime.split(':')[2];
        },
        spsecondmax() {
            return this.maxTime.split(':')[2];
        },
    },
    watch: {
        time(newValue) {
            this.validTime(newValue);
            // 如果超出时间范围，则设置为范围边界的时间
            const isOutOfRange = this.isOutOfRange(newValue);
            if (isOutOfRange)
                return this.currentTime = isOutOfRange;
            this.currentTime = newValue;
        },
        currentTime(newValue, oldValue) {
            // 如果超出时间范围，则设置为范围边界的时间
            const isOutOfRange = this.isOutOfRange(newValue);
            if (isOutOfRange)
                return this.currentTime = isOutOfRange;
            if (this.currentTime === this.minTime) {
                this.hourmin = this.sphourmin;
                this.minutemin = this.spminutemin;
                this.secondmin = this.spsecondmin;
            } else if (this.currentTime === this.maxTime) {
                this.hourmax = this.sphourmax;
                this.minutemax = this.spminutemax;
                this.secondmax = this.spsecondmax;
            } else {
                this.hourmin = HOUR_MIN;
                this.minutemin = MINUTE_MIN;
                this.secondmin = SECOND_MIN;
                this.hourmax = HOUR_MAX;
                this.minutemax = MINUTE_MAX;
                this.secondmax = SECOND_MAX;
            }

            /**
             * @event change 时间改变时触发
             * @property {object} sender 事件发送对象
             * @property {object} time 改变后的时间
             */
            this.$emit('change', {
                sender: this,
                time: newValue, // 弃用
                value: newValue,
                oldValue,
            });
        },
        minTime(newValue, oldValue) {
            this.hourmin = HOUR_MIN;
            this.minutemin = MINUTE_MIN;
            this.secondmin = SECOND_MIN;
            this.hourmax = HOUR_MAX;
            this.minutemax = MINUTE_MAX;
            this.secondmax = SECOND_MAX;
        },
        maxTime(newValue, oldValue) {
            this.hourmin = HOUR_MIN;
            this.minutemin = MINUTE_MIN;
            this.secondmin = SECOND_MIN;
            this.hourmax = HOUR_MAX;
            this.minutemax = MINUTE_MAX;
            this.secondmax = SECOND_MAX;
        },
    },
    methods: {
        /**
         * @method isOutOfRange(time) 是否超出规定的时间范围
         * @public
         * @param {Time} time 待测的时间
         * @return {boolean|Time} time 如果没有超出时间范围，则返回false；如果超出时间范围，则返回范围边界的时间
         */
        isOutOfRange(time) {
            const minTime = this.minTime;
            const maxTime = this.maxTime;

            // minTime && time < minTime && minTime，先判断是否为空，再判断是否超出范围，如果超出则返回范围边界的时间
            return (minTime && time < minTime && minTime) || (maxTime && time > maxTime && maxTime);
        },
        changeHour(hour) {
            hour = '' + hour;
            this.currentTime = (hour.length > 1 ? hour : '0' + hour) + ':' + this.minute + ':' + this.second;
        },
        changeMinute(minute) {
            minute = '' + minute;
            this.currentTime = this.hour + ':' + (minute.length > 1 ? minute : '0' + minute) + ':' + this.second;
        },
        changeSecond(second) {
            second = '' + second;
            this.currentTime = this.hour + ':' + this.minute + ':' + (second.length > 1 ? second : '0' + second);
        },
        onBeforeChange(event, index) {
            let cancel = false;
            const timeArr = this.currentTime.split(':');
            timeArr[index] = +event.newValue < 10 ? '0' + event.newValue : '' + event.newValue;
            this.$emit('before-change', {
                value: timeArr.join(':'),
                oldValue: this.currentTime,
                preventDefault: () => cancel = true,
            });
            if (cancel)
                event.preventDefault();
        },
        // 格式必须为三个正数':'连接
        validTime(time) {
            if (!time)
                throw new TypeError('Invalid Time');
            const arr = time.split(':').map((item) => +item);
            if (!arr || arr.length !== 3 || arr.find((item) => isNaN(item) || item < 0))
                throw new TypeError('Invalid Time');
        },
    },
};

const TimeRangeError = function (minTime, maxTime) {
    this.name = 'TimeRangeError';
    this.message = 'Wrong Time Range where `minTime` is ' + minTime + ' and `maxTime` is ' + maxTime + '!';
};

TimeRangeError.prototype = Object.create(Error.prototype);
TimePicker.TimeRangeError = TimeRangeError.prototype.constructor = TimeRangeError;

export default TimePicker;
