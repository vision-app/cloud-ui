import Input from 'proto-ui.vusion/src/u-input.vue';

export default {
    name: 'u-input',
    mixins: [Input],
    props: {
        maxlengthMessage: String,
        width: String,
        height: String,
    },
    data() {
        return {
            inputValue: this.value,
        };
    },
    watch: {
        value(newValue) {
            this.inputValue = newValue;
        },
        inputValue(newValue, oldValue) {
            let cancel = false;
            this.$emit('before-change', {
                newValue,
                oldValue,
                preventDefault: () => cancel = true,
            });
            if (cancel) { // 取消输入
                this.inputValue = this.currentValue;
                return;
            }
            this.currentValue = this.inputValue;
        },
    },
    methods: {
        onKeypress(e) {
            const inputEl = e.target;
            if (this.formItemVM && this.maxlengthMessage
                && inputEl.value.length === inputEl.maxLength) {
                this.formItemVM.color = 'error';
                this.formItemVM.currentMessage = this.maxlengthMessage;
            }
        },
        onKeyup(e) {
            this.$emit('keyup', e);
        },
        onInput(e) {
            if (this.formItemVM && this.maxlengthMessage) {
                this.formItemVM.color = '';
                this.formItemVM.currentMessage = '';
            }
            this.inputValue = e.target.value;
            this.$emit('input', this.inputValue);
        },
        set(value) {
            if (isNaN(value))
                return;
            this.inputValue = value;
        },
    },
};
