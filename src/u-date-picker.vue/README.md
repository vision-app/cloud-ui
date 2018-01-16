# 日期选择 DatePicker

## 示例
### 基本形式

#### 声明式

### 基本
``` html
<u-date-picker></u-date-picker>
```

### 设置对齐
``` html
<div>
    <u-date-picker date="2018-08-08" alignment="right"></u-date-picker>
</div>
```

### 最大值maxDate 最小值minDate
``` html
<u-date-picker date="2018-08-08" min-date="2018-08-06" max-date="2018-08-18"></u-date-picker>
```

### 只读与禁用
``` html
<u-linear-layout>
    <u-date-picker readonly date="2018-08-08"></u-date-picker>
    <u-date-picker disabled date="2018-08-08"></u-date-picker>
</u-linear-layout>
```

### 获取改变值方法 change select
``` vue
<template>
<u-date-picker time="morning" :date.sync="date" @change="change" @select="select" @toggle="toggle($event)">Modal</u-date-picker>
</template>

<script>
export default {
    data(){
        return {
            date: '2014-12-01',
        }
    },
    methods: {
        change(newVal) {
            console.log(newVal);
        },
        select(newVal) {
            console.log(newVal);
        },
        toggle(event) {
            console.log(event.open);
        }
    },
    watch: {
        date(newValue) {
            console.log(newValue);
        },
    },
};
</script>
```
## DatePicker API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| date.sync | String,Number,Date | | 设置日期 |
| minDate | String,Number,Date | | 最小日期 |
| maxDate | String,Number,Date | | 最大日期 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |
| autofocus | Boolean | `false` | 文本框默认处于focus |
| placeholder | String | 请选择日期 | 文本框默认提示 |
| alignment | String | `left` | 日历弹窗对其方式，可选值：left, right |
| time | String, Number | `start` | 设置返回的日期的时分秒值，可选值为start,表示时分秒是0:00:00,morning:时分秒为8:00:00,end:表示时分秒为: 23:59:59, 输入整数表示对应的整数时刻，例如输入9代表时分秒为9:00:00,自定义时分秒请输入对应格式的字符串即可 |

### Events 
#### @before-change
日期改变前触发
| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.preventDefault | Function | 阻止日期改变 |
#### @change
日期改变时触发
| Param | Type | Description |
| ----- | ---- | ----------- |
| sender | Object | 事件发送对象 |
| value | Date | 当前选择日期 |
| oldValue | Date | 旧值 |
#### @toggle
toggle日历弹窗时触发
| Param | Type | Description |
| ----- | ---- | ----------- |
| sender | Object | 事件发送对象 |
| date | Date | 当前选择日期 |
#### @select @deprecated 
select事件触发：只有调用select方法时触发
| Param | Type | Description |
| ----- | ---- | ----------- |
| sender | Object | 事件发送对象 |
| date | Date | 当前选择日期 |
### Methods
#### select(date)
| Param | Type | Description |
| ----- | ---- | ----------- |
| date | Date | 选择的日期 |