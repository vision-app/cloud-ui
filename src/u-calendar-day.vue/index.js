import getYear from 'date-fns/get_year';
import getMonth from 'date-fns/get_month';
import getDay from 'date-fns/get_day';
import getDate from 'date-fns/get_date';
import startOfMonth from 'date-fns/start_of_month';
import lastDayOfMonth from 'date-fns/last_day_of_month';
import addDays from 'date-fns/add_days';
import isAfter from 'date-fns/is_after';
import isEqual from 'date-fns/is_equal';
import addMonths from 'date-fns/add_months';
import isToday from 'date-fns/is_today';
import parse from 'date-fns/parse';

import { Emitter } from 'proto-ui.vusion';
import { inDateRange } from '../u-calendar.vue/date';

export default {
    name: 'u-calendar-day',
    parentName: 'u-calendar',
    mixins: [Emitter],
    props: {
        value: { type: [String, Date, Number], default: undefined },
        showDate: { type: [String, Date, Number], default: undefined },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        isRangePicker: { type: Boolean, default: false },
        dateRange: { type: Array, default: () => [] },
        allowPre: { type: Boolean, default: true },
        allowNext: { type: Boolean, default: true },
        selectedValues: { type: Array, default: () => [] }, // dateRangePicker选择的所有日期
    },
    data() {
        return {
            weekArr: ['日', '一', '二', '三', '四', '五', '六'],
            currentDate: null,
            currentShowDate: null, // 当前显示时间页面
            currentMonth: '',
            dayRowArr: [],
            allowClick: !this.disabled && !this.readonly,
            hoverDate: undefined,
        };
    },
    watch: {
        showDate(newDate, oldDate) {
            if (isEqual(newDate, oldDate))
                return;

            this.initDate();
        },
        value(value, oldValue) {
            const newDate = parse(value);
            const oldDate = parse(oldValue);
            if (isEqual(newDate, oldDate))
                return;
            this.initDate();
        },
    },
    created() {
        this.initDate();
    },
    methods: {
        initDate(date = this.value) {
            this.currentDate = date ? parse(date) : undefined;
            this.currentShowDate = this.showDate ? parse(this.showDate) : (this.currentDate || new Date());
            this.currentMonth = getMonth(this.currentShowDate);
            this.getAllDays(this.currentShowDate);
        },
        onYearClick() {
            this.dispatch(this.$options.parentName, 'change-view', {
                fview: this,
                tview: 'year',
            });
        },
        onMonthClick() {
            this.dispatch(this.$options.parentName, 'change-view', {
                fview: this,
                tview: 'month',
            });
        },
        onDateClick(date) {
            if (this.isRangePicker) {
                let cancel = false;
                this.$emit('before-select', {
                    preventDefault: () => cancel = true,
                });

                if (cancel)
                    return;

                this.$emit('select', {
                    sender: this,
                    value: date,
                    oldValue: null,
                });
                this.initDate(date);
            } else
                this.dispatch(this.$options.parentName, 'selectDate', date);
        },
        // 得到当前月份的所有日期
        getAllDays(date) {
            this.dayRowArr = [];
            let start = startOfMonth(date);
            let end = lastDayOfMonth(date);
            start = addDays(startOfMonth(date), -getDay(start));
            end = addDays(lastDayOfMonth(date), 6 - getDay(end));

            let tempDate = start;
            while (!isAfter(tempDate, end)) {
                const rowArr = [];
                for (let i = 0; i < 7; ++i) {
                    rowArr.push({
                        showDate: getDate(tempDate),
                        date: tempDate,
                        disabled: !inDateRange(tempDate, this.dateRange),
                    });
                    tempDate = addDays(tempDate, 1);
                }
                this.dayRowArr.push(rowArr);
            }
        },
        addMonth(monthGap) {
            this.$emit('update:showDate', addMonths(this.currentShowDate, monthGap));
        },
        isSelected(item) {
            if (this.isRangePicker)
                return this.selectedValues.some((date) => isEqual(item.date, date));
            else
                return isEqual(item.date, this.currentDate);
        },
        isBetween(date) {
            if (this.isRangePicker) {
                let rangeArr = [];
                if ((this.selectedValues.filter((value) => value)).length === 1 && this.hoverDate) {
                    const hoverAfterSelect = isAfter(this.hoverDate, this.selectedValues[0]);
                    rangeArr.push([hoverAfterSelect ? this.selectedValues[0] : this.hoverDate, hoverAfterSelect ? this.hoverDate : this.selectedValues[0]]);
                } else if ((this.selectedValues.filter((value) => value)).length === 2)
                    rangeArr = this.selectedValues.slice(0);
                return rangeArr.length <= 0 ? false : inDateRange(date, rangeArr, true);
            }
            return false;
        },
        isEqual,
        getMonth,
        getYear,
        isToday,
    },
};