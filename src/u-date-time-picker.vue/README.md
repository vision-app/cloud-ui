# 日期时间选择 DateTimePicker

## 示例
### 基本形式

#### 声明式

### 基本 有初始值
``` html
<u-date-time-picker date="2018-08-08"></u-date-time-picker>
```

### 基本 无初始值
``` html
<u-date-time-picker></u-date-time-picker>
```

### 只读与禁用
``` html
<u-linear-layout>
    <u-date-time-picker date="2018-08-08" readonly="readonly"></u-date-time-picker>
    <u-date-time-picker date="2018-08-08" disabled="disabled"></u-date-time-picker>
</u-linear-layout>
```

### 最大值 最小值
``` html
<u-date-time-picker date="2017-05-12 8:00:00" min-date="2017-01-10 07:00:00" max-date="2017-12-12 07:00:00"></u-date-time-picker>
```

### 方法change
``` vue
<template>
<u-date-time-picker :date="date" @change="change($event.date)"></u-date-time-picker>
</template>

<script>
export default {
	data() {
		return {
			date: '2017-12-01 20:12:12',
		};
	},
    methods: {
        change(time) {
            console.log(time);
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
| value | String | 当前选择日期，格式：new Date().getTime() |
| oldValue | String | 旧值 |

