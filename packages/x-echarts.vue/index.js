/**
 * Copy from https://github.com/ecomfe/vue-echarts/blob/master/src/components/ECharts.vue
 */
import echarts from 'echarts';
import debounce from 'lodash/debounce';
import { addListener, removeListener } from 'resize-detector';
// enumerating ECharts events for now
const EVENTS = [
    'legendselectchanged',
    'legendselected',
    'legendunselected',
    'legendscroll',
    'datazoom',
    'datarangeselected',
    'timelinechanged',
    'timelineplaychanged',
    'restore',
    'dataviewchanged',
    'magictypechanged',
    'geoselectchanged',
    'geoselected',
    'geounselected',
    'pieselectchanged',
    'pieselected',
    'pieunselected',
    'mapselectchanged',
    'mapselected',
    'mapunselected',
    'axisareaselected',
    'focusnodeadjacency',
    'unfocusnodeadjacency',
    'brush',
    'brushselected',
    'rendered',
    'finished',
    'click',
    'dblclick',
    'mouseover',
    'mouseout',
    'mousemove',
    'mousedown',
    'mouseup',
    'globalout',
    'contextmenu',
];
import './theme';
const INIT_TRIGGERS = ['theme', 'initOptions', 'autoresize'];
const REWATCH_TRIGGERS = ['manualUpdate', 'watchShallow'];
export const XEcharts = {
    name: 'x-echarts',
    props: {
        options: Object,
        theme: {
            type: [String, Object],
            default: 'cloud',
        },
        initOptions: Object,
        group: String,
        autoresize: Boolean,
        watchShallow: Boolean,
        manualUpdate: Boolean,
    },
    data() {
        return {
            lastArea: 0,
        };
    },
    watch: {
        group(group) {
            this.chart.group = group;
        },
    },
    methods: {
    // provide a explicit merge option method
        mergeOptions(options, notMerge, lazyUpdate) {
            if (this.manualUpdate) {
                this.manualOptions = options;
            }
            if (!this.chart) {
                this.init();
            } else {
                this.delegateMethod('setOption', options, notMerge, lazyUpdate);
            }
        },
        // just delegates ECharts methods to Vue component
        // use explicit params to reduce transpiled size for now
        appendData(params) {
            this.delegateMethod('appendData', params);
        },
        resize(options) {
            this.delegateMethod('resize', options);
        },
        dispatchAction(payload) {
            this.delegateMethod('dispatchAction', payload);
        },
        convertToPixel(finder, value) {
            return this.delegateMethod('convertToPixel', finder, value);
        },
        convertFromPixel(finder, value) {
            return this.delegateMethod('convertFromPixel', finder, value);
        },
        containPixel(finder, value) {
            return this.delegateMethod('containPixel', finder, value);
        },
        showLoading(type, options) {
            this.delegateMethod('showLoading', type, options);
        },
        hideLoading() {
            this.delegateMethod('hideLoading');
        },
        getDataURL(options) {
            return this.delegateMethod('getDataURL', options);
        },
        getConnectedDataURL(options) {
            return this.delegateMethod('getConnectedDataURL', options);
        },
        clear() {
            this.delegateMethod('clear');
        },
        dispose() {
            this.delegateMethod('dispose');
        },
        delegateMethod(name, ...args) {
            if (!this.chart) {
                this.init();
            }
            return this.chart[name](...args);
        },
        delegateGet(methodName) {
            if (!this.chart) {
                this.init();
            }
            return this.chart[methodName]();
        },
        getArea() {
            return this.$el.offsetWidth * this.$el.offsetHeight;
        },
        init() {
            if (this.chart) {
                return;
            }
            const chart = echarts.init(this.$el, this.theme, this.initOptions);
            if (this.group) {
                chart.group = this.group;
            }
            chart.setOption(this.manualOptions || this.options || {}, true);
            // expose ECharts events as custom events
            EVENTS.forEach((event) => {
                chart.on(event, (params) => {
                    this.$emit(event, params);
                });
            });
            if (this.autoresize) {
                this.lastArea = this.getArea();
                this.__resizeHandler = debounce(() => {
                    if (this.lastArea === 0) {
                        // emulate initial render for initially hidden charts
                        this.mergeOptions({}, true);
                        this.resize();
                        this.mergeOptions(this.options || this.manualOptions || {}, true);
                    } else {
                        this.resize();
                    }
                    this.lastArea = this.getArea();
                }, 100, { leading: true });
                addListener(this.$el, this.__resizeHandler);
            }
            Object.defineProperties(this, {
                // Only recalculated when accessed from JavaScript.
                // Won't update DOM on value change because getters
                // don't depend on reactive values
                width: {
                    configurable: true,
                    get: () => this.delegateGet('getWidth'),
                },
                height: {
                    configurable: true,
                    get: () => this.delegateGet('getHeight'),
                },
                isDisposed: {
                    configurable: true,
                    get: () => !!this.delegateGet('isDisposed'),
                },
                computedOptions: {
                    configurable: true,
                    get: () => this.delegateGet('getOption'),
                },
            });
            this.chart = chart;
        },
        initOptionsWatcher() {
            if (this.__unwatchOptions) {
                this.__unwatchOptions();
                this.__unwatchOptions = null;
            }
            if (!this.manualUpdate) {
                this.__unwatchOptions = this.$watch('options', (val, oldVal) => {
                    if (!this.chart && val) {
                        this.init();
                    } else {
                        // mutating `options` will lead to merging
                        // replacing it with new reference will lead to not merging
                        // eg.
                        // `this.options = Object.assign({}, this.options, { ... })`
                        // will trigger `this.chart.setOption(val, true)
                        // `this.options.title.text = 'Trends'`
                        // will trigger `this.chart.setOption(val, false)`
                        this.chart.setOption(val, val !== oldVal);
                    }
                }, { deep: !this.watchShallow });
            }
        },
        destroy() {
            if (this.autoresize) {
                removeListener(this.$el, this.__resizeHandler);
            }
            this.dispose();
            this.chart = null;
        },
        refresh() {
            if (this.chart) {
                this.destroy();
                this.init();
            }
        },
    },
    created() {
        this.initOptionsWatcher();
        INIT_TRIGGERS.forEach((prop) => {
            this.$watch(prop, () => {
                this.refresh();
            }, { deep: true });
        });
        REWATCH_TRIGGERS.forEach((prop) => {
            this.$watch(prop, () => {
                this.initOptionsWatcher();
                this.refresh();
            });
        });
    },
    mounted() {
    // auto init if `options` is already provided
        if (this.options) {
            this.init();
        }
    },
    activated() {
        if (this.autoresize) {
            this.chart && this.chart.resize();
        }
    },
    beforeDestroy() {
        if (!this.chart) {
            return;
        }
        this.destroy();
    },
    connect(group) {
        if (typeof group !== 'string') {
            group = group.map((chart) => chart.chart);
        }
        echarts.connect(group);
    },
    disconnect(group) {
        echarts.disConnect(group);
    },
    registerMap(mapName, geoJSON, specialAreas) {
        echarts.registerMap(mapName, geoJSON, specialAreas);
    },
    registerTheme(name, theme) {
        echarts.registerTheme(name, theme);
    },
    graphic: echarts.graphic,
};
export default XEcharts;
