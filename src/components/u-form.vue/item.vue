<template>
<div :class="$style.root" :label-size="currentLabelSize" :distance="rootVM && rootVM.extraSlots ? 'extra' : ''">
    <label :class="$style.label" :required="currentRequired" v-show="label || title || currentLabelSize !== 'auto'">
        <slot name="label">{{ label || title }}</slot>
    </label>
    <span :class="$style.extra" v-if="!hideSlots && rootVM && rootVM.extraSlots">
        <slot name="extra"></slot>
    </span>
    <div :class="$style.field">
        <!-- 添加了描述功能 -->
        <div :class="$style.description">
            <slot name="description">{{ description }}</slot>
        </div>
        <div :class="$style.wrap">
            <slot></slot>
            <span v-if="color === 'focus' && currentMessage" :class="$style.message" color="focus"><slot name="message">{{ currentMessage }}</slot></span>
            <span v-else-if="currentMessage" :class="$style.message" :color="color"><slot name="message">{{ currentMessage }}</slot></span>
            <span v-else-if="bubble && !mutedMessage && touched && !valid && firstError" :class="$style.message" color="error">{{ firstError }}</span>
        </div>
    </div>
</div>
</template>

<script>
import UValidator from '../u-validator.vue';

export default {
    name: 'u-form-item',
    mixins: [UValidator],
    props: {
        // name: String,
        // label: String,
        title: String,
        // rules: Array,
        // ignoreRules: { type: Boolean, default: false },
        // message: String,
        required: { type: Boolean, default: false },
        labelSize: String,
        bubble: { type: Boolean, default: false },
        description: String,
        hideSlots: { type: Boolean, default: false },
    },

    data() {
        return {
            // value: undefined,
            // state: '',
            // color: '',
            // currentMessage: this.message,
            // inputing: false,
            // parentVM: undefined,
            // fieldVM: undefined,
        };
    },
    computed: {
        currentRequired() {
            return (
                this.required
                || (Array.isArray(this.currentRules)
                    && this.currentRules.some((rule) => rule.required))
            );
        },
        currentLabelSize() {
            return (
                this.labelSize
                || (this.rootVM && this.rootVM.labelSize)
                || 'auto'
            );
        },
    },

    methods: {
        // onFocus() {
        //     this.color = 'focus';
        //     this.currentMessage = this.message;
        // },
        // onBlur() {
        //     this.color = this.state = '';
        //     this.$nextTick(() => this.validate('blur').catch((errors) => errors));
        // },
    },
};
</script>

<style module>
.root {
    position: relative;
}

.label {
    display: inline-block;
    padding-right: var(--form-item-label-padding-right);
    color: var(--color-light);
    text-align: right;
    position: relative;
}

.label[required]::after {
    content: '*';
    color: var(--form-required-color);
    position: absolute;
    right: var(--form-required-right);
    height: 12px;
    line-height: 12px;
    top: 7px;
}

.field {
    display: inline-block;
    position: relative;
}

.message {
    position: absolute;
    left: 100%;
    top: 0;
    z-index: var(--validator-message-z-index);
    display: none;
    line-height: var(--validator-message-line-height);
    font-size: 12px;
    margin-left: var(--validator-message-margin-left);
    margin-top: var(--validator-message-margin-top);
    padding: var(--validator-message-padding);
    background: var(--validator-message-background);
    border-radius: var(--validator-message-border-radius);
    box-shadow: var(--validator-message-box-shadow);
}

.message[color="focus"] {
    display: block;
    padding: 3px 10px;
    height: auto;
    width: 300px;
    background: #f7faff;
    color: #7dacde;
    border: 1px solid #d6e6fe;
}

.message[color="focus"]::after, .message[color="focus"]::before {
    position: absolute;
    content: '';
    top: 10px;
    left: -8px;
    border: 4px solid transparent;
    border-right: 4px solid #f7faff;
}

.message[color="focus"]::before {
    border-right-color: #d6e6fe;
    left: -9px;
}

.message[color="error"] {
    display: block;
    top: 50%;
    transform: translateY(-50%);
    white-space: nowrap;
    background: var(--validator-message-background-error);
    color: var(--validator-message-color-error);
    white-space: var(--validator-message-white-space);
    border-radius: var(--validator-message-border-radius);
    box-shadow: var(--validator-message-box-shadow);
    min-width: var(--validator-message-min-width);
}

.message[color="error"]::before {
    icon-font: url('../i-icon.vue/assets/warning.svg');
    color: white;
    font-size: 14px;
    margin-left: -2px;
    margin-right: 6px;
    vertical-align: -1px;
}

.message[color="error"]::after {
    content: '';
    position: absolute;
    right: 100%;
    top: 8px;
    width: 0;
    height: 0;
    border-top: 4px solid transparent;
    border-right: 4px solid var(--validator-message-background-error);
    border-bottom: 4px solid transparent;
}

.root[placement="bottom"] .message {
    position: absolute;
    top: 100%;
    left: 0;
    margin-left: var(--validator-message-margin-left-bottom);
    transform: translateY(0);
}

.root[placement="bottom"] .message::after {
    display: none;
}

.root[placement="bottom"] .message[color="error"] {
    transform: none;
}

.root[label-size$="mini"] > .label { width: var(--form-item-label-width-mini); padding-right: var(--form-item-label-padding-right-mini); }
.root[label-size$="mini"] > .label::after { right: var(--form-required-right-mini); }
.root[label-size$="mini"] > .field { max-width: calc(100% - var(--form-item-label-width-mini)); }

.root[label-size$="small"] > .label { width: var(--form-item-label-width-small); padding-right: var(--form-item-label-padding-right-small); }
.root[label-size$="small"] > .label::after { right: var(--form-required-right-small); }
.root[label-size$="small"] > .field { max-width: calc(100% - var(--form-item-label-width-small)); }

.root[label-size$="normal"] > .label { width: var(--form-item-label-width); padding-right: var(--form-item-label-padding-right); }
.root[label-size$="normal"] > .label::after { right: var(--form-required-right); }
.root[label-size$="normal"] > .field { max-width: calc(100% - var(--form-item-label-width)); }

.root[label-size$="large"] > .label { width: var(--form-item-label-width-large); padding-right: var(--form-item-label-padding-right-large); }
.root[label-size$="large"] > .label::after { right: var(--form-required-right-large); }
.root[label-size$="large"] > .field { max-width: calc(100% - var(--form-item-label-width-large)); }

.root[field-size="full"] > .field {
    width: 100%;
}

.root[layout="block"] > .field {
    vertical-align: top;
}

.root[layout="none"] {
    display: inline-block;
}
.root[layout="none"] > .label {
    display: none;
}
.root[layout="none"] > .field {
    max-width: none;
}

.description {
    color: var(--color-light);
    margin-bottom: 10px;
}

.description:empty {
    display: none;
}

.wrap {
    position: relative;
    display: inline-block;
    max-width: 100%;
}

.root[field-size="full"] .wrap {
    display: block;
}

.extra {
    width: 24px;
    display: inline-block;
    position: relative;
    left: -12px;
}

.root[layout="block"][placement="right"] > .field > .wrap > .message {
    top: 0;
    transform: none;
}

.root[distance="extra"][label-size$="small"] > .field {
    max-width: calc(100% - 110px);
}
.root[distance="extra"][label-size$="normal"] > .field {
    max-width: calc(100% - 150px);
}
.root[distance="extra"][label-size$="large"] > .field {
    max-width: calc(100% - 190px);
}

.root div[class^="u-form-table-view"] {
    margin-top: -13px;
}
</style>
