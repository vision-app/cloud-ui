import uPopover from '../u-popover.vue';
import uListViewItem from 'proto-ui.vusion/src/u-list-view-item.vue';
import uListView from 'proto-ui.vusion/src/u-list-view.vue';
const MS_OF_DAY = 86400000; // 24 * 3600 * 1000
const isDate = (o) => ({}.toString.call(o) === '[object Date]' && o.toString() !== 'Invalid Date' && !isNaN(o));

/**
 * @class Calendar
 * @extend Component
 * @param {object}                  options                    =  绑定属性
 * @param {Date|string=TODAY}       options.date               <=> 当前选择的日期
 * @param {Date|string=null}        options.minDate             => 最小日期，如果为空则不限制
 * @param {Date|string=null}        options.maxDate             => 最大日期，如果为空则不限制
 * @param {boolean=false}           options.readonly            => 是否只读
 * @param {disabled=disabled}       options.disabled            => 是否禁用
 */
const Calendar = {
    name: 'u-calendar',
    props: {
        date: {
            type: [String, Number, Date],
            default() {
                return new Date();
            },
        },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        minDate: { type: [String, Number, Date], validator: (value) => isDate(new Date(value)) },
        maxDate: { type: [String, Number, Date], validator: (value) => isDate(new Date(value)) },
        yearDiff: { type: Number, default: 3 },
        yearAdd: { type: Number, default: 1 },
    },
    data() {
        return {
            days_: [],
            currentDate: this.date,
            updateFlag: false,
            monthCol: this.getMonthCol(),
            yearCol: this.getYearCol(),
            yearvisible: false,
            monthvisible: false,
        };
    },
    computed: {
        currentYear: {
            get() {
                const date = this.transformDate(this.currentDate);
                return date.getFullYear();
            },
            set(value) {
                const date = new Date(this.currentDate);
                const oldMonth = date.getMonth();
                date.setFullYear(value);
                if (date.getMonth() !== oldMonth)
                    date.setDate(0);

                this.updateFlag = true;
                this.setCurrentDate(new Date(date));
            },
        },
        currentMonth: {
            get() {
                const date = this.transformDate(this.currentDate);
                const month = date.getMonth() + 1;
                return month;
            },
            set(value) {
                const date = new Date(this.currentDate); // 创建新Date，不修改currentDate
                date.setMonth(value - 1);

                this.updateFlag = true;
                this.setCurrentDate(new Date(date));
            },
        },
        // yearCol() {
        //     const date = this.transformDate(this.currentDate);
        //     const currentYear = date.getFullYear();
        //     const yearcol = [];
        //     const yearmin = currentYear - this.yearDiff;
        //     const yearmax = parseInt(currentYear) + parseInt(this.yearAdd);
        //     for (let i = yearmin; i <= yearmax; i++)
        //         yearcol.push(i);

        //     return yearcol;
        // },
    },
    components: {
        uPopover,
        uListView,
        uListViewItem,
    },
    watch: {
        date(newValue) {
            this.setCurrentDate(this.transformDate(newValue));
            this.updateFlag = true;
        },
        currentDate(newValue) {
            if (newValue) {
                if (this.updateFlag) {
                    this.updateFlag = false;
                    this.update();
                }
            }
            /**
             * @event change 日期改变时触发
             * @property {object} sender 事件发送对象
             * @property {object} date 改变后的日期
             */
            this.$emit('change', {
                sender: this,
                date: newValue,
            });

            this.$emit('update:date', new Date(newValue));
        },
        // 最小值 最大值 发生变化 需要监听
    },
    filters: {
        format(value, type) {
            if (!value)
                return '';
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
    },
    created() {
        if (this.minDate && this.maxDate) {
            const minDate = new Date(this.minDate);
            const maxDate = new Date(this.maxDate);
            if (minDate / MS_OF_DAY >> 0 > maxDate / MS_OF_DAY >> 0)
                throw new RangeError('Parameter must be between ' + minDate + ' and ' + maxDate);
        }

        this.update();
    },
    methods: {
        yearSelect(value) {
            this.currentYear = value;
            this.yearvisible = false;
        },
        monthSelect(month) {
            this.currentMonth = month.value;
            this.monthvisible = false;
        },
        getYearCol() {
            const date = this.transformDate(this.date);
            let minDate = null,
                maxDate = null;

            if (this.minDate)
                minDate = this.transformDate(this.minDate).getFullYear();

            if (this.maxDate)
                maxDate = this.transformDate(this.maxDate).getFullYear();

            const currentYear = date.getFullYear();
            const yearcol = [];
            const yearmin = currentYear - this.yearDiff;
            const yearmax = currentYear + parseInt(this.yearAdd);
            for (let i = yearmin; i <= yearmax; i++) {
                const obj = {
                    value: i,
                };
                if (minDate && (i < minDate))
                    obj.disabled = true;
                else if (maxDate && (i > maxDate))
                    obj.disabled = true;
                else
                    obj.disabled = false;

                yearcol.push(obj);
            }

            return yearcol;
        },
        getMonthCol() {
            const date = this.transformDate(this.date);
            let minDate = null,
                maxDate = null;

            if (this.minDate) {
                minDate = this.transformDate(this.minDate);
                const minYear = minDate.getFullYear();
                const minMonth = minDate.getMonth();
                const minFormat = minYear + '/' + (minMonth + 1);
                minDate = new Date(minFormat).getTime();
            }

            if (this.maxDate) {
                maxDate = this.transformDate(this.maxDate);
                const maxYear = maxDate.getFullYear();
                const maxMonth = maxDate.getMonth();
                const maxFormat = maxYear + '/' + (maxMonth + 1);
                maxDate = new Date(maxFormat).getTime();
            }

            const currentYear = date.getFullYear();
            const monthcol = [];
            // const mindate = currentYear - this.yearDiff;
            // const maxdate = parseInt(currentYear) + parseInt(this.yearAdd);
            for (let i = 1; i <= 12; i++) {
                const obj = {
                    value: i,
                };
                const dateFormat = currentYear + '/' + i;
                const dateTime = new Date(dateFormat).getTime();
                if (minDate && (dateTime < minDate))
                    obj.disabled = true;
                else if (maxDate && (dateTime > maxDate))
                    obj.disabled = true;
                else
                    obj.disabled = false;

                monthcol.push(obj);
            }

            return monthcol;
        },
        /**
         * @method update() 日期改变后更新日历
         * @private
         * @return {void}
         */
        update() {
            this.days_ = [];
            this.setCurrentDate(this.transformDate(this.currentDate));
            const date = this.currentDate;
            const month = date.getMonth();
            const mfirst = new Date(date);
            mfirst.setDate(1);
            mfirst.setHours(0, 0, 0, 0);
            const mfirstTime = +mfirst;
            const nfirst = new Date(mfirst); nfirst.setMonth(month + 1); nfirst.setDate(1);
            const nfirstTime = +nfirst;
            const lastTime = nfirstTime + ((7 - nfirst.getDay()) % 7 - 1) * MS_OF_DAY;
            let num = -mfirst.getDay();
            let tmpTime, tmp;
            do {
                tmpTime = mfirstTime + (num++) * MS_OF_DAY;
                tmp = new Date(tmpTime);
                this.days_.push(tmp); // Date类型
            } while (tmpTime < lastTime);
        },
        /**
         * @method select(date) 选择一个日期
         * @public
         * @param  {Date=null} date 选择的日期
         * @return {void}
         */
        select(date) {
            if (this.readonly || this.disabled || this.isOutOfRange(date))
                return;
            date = new Date(date);
            if (!isDate(date))
                throw new TypeError('date类型错误');

            const _month = date.getMonth() + 1;

            if (this.currentMonth !== _month)
                this.updateFlag = true;

            this.setCurrentDate(new Date(date));

            /**
             * TODO： 弃用，改为change
             */
            this.$emit('select', {
                sender: this,
                date,
            });
        },
        /**
         * @method isOutOfRange(date) 是否超出规定的日期范围
         * @public
         * @param {Date} date 待测的日期
         * @return {boolean|Date} date 如果没有超出日期范围，则返回false；如果超出日期范围，则返回范围边界的日期
         */
        isOutOfRange(date) {
            date = new Date(date);
            if (!isDate(date))
                throw new TypeError('date类型错误');

            let minDate = this.transformDate(this.minDate);
            let maxDate = this.transformDate(this.maxDate);

            // 不要直接在$watch中改变`minDate`和`maxDate`的值，因为有时向外绑定时可能不希望改变它们。
            minDate = minDate && minDate.setHours(0, 0, 0, 0);
            maxDate = maxDate && maxDate.setHours(0, 0, 0, 0);

            // minDate && date < minDate && minDate，先判断是否为空，再判断是否超出范围，如果超出则返回范围边界的日期
            return (minDate && date < minDate && minDate) || (maxDate && date > maxDate && maxDate);
        },
        transformDate(date) {
            if (typeof date === 'string')
                return new Date(date.replace(/-/g, '/'));
            else if (typeof date === 'number')
                return new Date(date);
            else if (typeof date === 'object')
                return date;
        },
        fix(str) {
            str = '' + (String(str) || '');
            return str.length <= 1 ? '0' + str : str;
        },
        // 设置currentDate并抛出事件
        setCurrentDate(date) {
            if (new Date(date).getTime() === new Date(this.currentDate).getTime())
                return;
            // 如果超出日期范围，则设置为范围边界的日期
            const isOutOfRange = this.isOutOfRange(date);
            if (isOutOfRange) {
                this.setCurrentDate(new Date(isOutOfRange));

                // 防止第二次刷新同月
                this.update();
                return;
            }

            let cancel = false;
            this.$emit('before-change', {
                preventDefault: () => cancel = true,
            });
            if (cancel)
                return;

            this.currentDate = date;
        },
    },
};

export default Calendar;
