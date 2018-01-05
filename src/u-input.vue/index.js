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
            if (this.canceled) { // 取消输入后，将inputValue赋值为currentValue时不需要发送before-change事件
                this.canceled = false;
                return;
            }
            let cancel = false;
            this.$emit('before-change', {
                newValue,
                oldValue: this.currentValue,
                preventDefault: () => cancel = true,
            });
            if (cancel) { // 取消输入
                this.canceled = true;
                this.inputValue = this.currentValue;
                return;
            }
            this.currentValue = newValue;
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
