import { Dynamic, Validator } from 'proto-ui.vusion';
import i18n from './i18n';

export const UDynamicCards = {
    name: 'u-dynamic-cards',
    mixins: [Dynamic, Validator],
    i18n,
    props: {
        // data: Array,
        // getDefaultItem: Function,
        textField: { type: String, default: 'title' },
        index: { type: Number, default: 0 },
        addButtonText: { type: String, default() { return this.$t('add'); } },
        miniFormatter: Function,
    },
    data() {
        return {
            // currentData
            currentIndex: this.index, // @TODO: 先用 index，观察会不会有不合适的问题
        };
    },
    created() {
        this.$on('add', ({ index }) => {
            this.currentIndex = index;
        });
        this.$on('remove', ({ index }) => {
            this.currentIndex = index === this.currentData.length ? index - 1 : index;
        });
    },
    methods: {
        expand(index) {
            this.currentIndex = index;
        },
        collapse(index) {
            this.currentIndex = undefined;
        },
    },
};

export { UDynamicCard } from './dynamic-card.vue';

export default UDynamicCards;
