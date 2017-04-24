import Base from 'u-base.vue';
import Button from 'u-button.vue';

const Modal = Base.extend({
    name: 'u-modal',
    props: {
        title: {
            type: String,
            default: '提示',
        },
        okButton: {
            type: String,
            default: '确定',
        },
        cancelButton: {
            type: String,
            default: '取消',
        },
        content: {
            type: String,
            default: '提示内容',
        },
    },
    data() {
        return {
            show: false,
        };
    },
    methods: {
        ok() {
            this.$emit('onOk', {
                sender: this,
            });
            this.close();
        },
        cancel() {
            this.close();
        },
        close() {
            this.show = false;
        },
        open() {
            this.show = true;
            if (!this.$el) {
                const ele = document.createElement('div');
                this.$mount(ele);
                document.body.appendChild(this.$el);
            }
        },
    },
});

/**
 * @method alert(content[,title]) 弹出一个alert模态框。关闭时始终触发确定事件。
 * @static
 * @public
 * @param  {string=''} content 模态框内容
 * @param  {string='提示'} title 模态框标题
 */
Modal.alert = (content, title = '提示', okButton = '确定') => {
    const modal = new Modal({
        data: { content, title, okButton, cancelButton: '' },
    });

    modal.open();
};

/**
 * @method confirm(content[,title]) 弹出一个confirm模态框
 * @static
 * @public
 * @param  {string=''} content 模态框内容
 * @param  {string='提示'} title 模态框标题
 */
Modal.confirm = (content, title = '提示', okButton = '确定', cancelButton = '取消') => {
    const modal = new Modal({
        data: { content, title, okButton, cancelButton },
    });

    modal.open();
};

export default Modal;
