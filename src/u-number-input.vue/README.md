# 数字输入 NumberInput

## 示例
### 基本形式

#### 声明式

### 基本
``` html
<u-number-input></u-number-input>
```
### format属性
``` html
<u-number-input format="0000" value="-5"></u-number-input>
```

### autofocus
``` html
<u-number-input value="12" autofocus="autofocus"></u-number-input>
```

### 最大值 最小值
``` html
<u-number-input value="12" min="5" max="20"></u-number-input>
```
### 只读与禁用

``` html
<u-linear-layout>
    <u-number-input value="12" readonly="readonly"></u-number-input>
    <u-number-input value="12" disabled="disabled"></u-number-input>
</u-linear-layout>
```

### 获取改变后的值change方法
``` vue
<template>
<u-number-input @change="change" :value="value" :readonly="readonly"></u-number-input>
</template>

<script>
export default {
    data() {
        return {
            value: 12,
            readonly: false,
        };
    },
    methods: {
        change(value) {
           console.log(value.value);
        },
    },
};
</script>
```


## API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value | String |  | 输入框的值 |
| max | [String, Number] |  | 最大值 |
| min | [String, Number] |  | 最小值 |
| format | String |  | 整数部分最小长度，如: '00'表示最少两位 |
| placeholder | String |  | 原生属性 |
| maxlength | Number |  | 原生属性 |
| autofocus | Boolean | | 原生属性 |
| readonly | Boolean | | 原生属性 |
| disabled | Boolean | | 原生属性 |
| size | String | `'normal'` | 大小扩展，支持一个值：`'mini'`, `'small'`, `'normal'`, `'large'`, `'huge'`, `'full'`，或两个值的组合，前者表示高度，后者表示宽度，类似CSS的padding书写格式 |
| gap | Number | `1` | 按键每次增/减的值 |

### Events

#### @input

输入时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | String | 输入的值 |

#### @before-change

改变输入框值前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.preventDefault | Function | 阻止change |
| newValue | String | 新值 |
| oldValue | String | 旧值 |

#### @change

值变化时触发（与原生事件不同）

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | String | 改变后的值 |
| $event.oldValue | String | 旧的值 |

#### @focus

获得焦点时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Object | 原生事件对象 |

#### @blur

失去焦点时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Object | 原生事件对象 |

#### @keyup

释放键盘键时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Object | 原生事件对象 |

#### @keypress

按下字符键时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Object | 原生事件对象 |

### Methods
#### set(value)
设置input框的值
| Param | Type | Description |
| ----- | ---- | ----------- |
| value | 不限定 | 要设置的值 |