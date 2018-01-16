# 时间选择 TimePicker

## 示例
### 基本形式

#### 声明式

### 基本
``` html
<u-time-picker time="15:46:00"></u-time-picker>
```

### 只读与禁用
``` html
<u-linear-layout>
    <u-time-picker time="15:46:33" readonly="readonly"></u-time-picker> 
    <u-time-picker time="15:46:33" disabled="disabled"></u-time-picker>
</u-linear-layout>
```

### 日期范围
``` html
<u-time-picker time="15:46:30" min-time="12:30:00" max-time="14:45:00"></u-time-picker>
```

``` vue
<template>
<u-time-picker :time="time" @change="change($event.time)"></u-time-picker>
</template>

<script>
export default {
	data() {
		return {
			time: '20:12:12',
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

## API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| time | String | '00:00:00' | 初始时间 |
| autofocus | Boolean | false | 原生属性 |
| readonly | Boolean | false | 原生属性 |
| disabled | Boolean | false | 原生属性 |
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
| $event.preventDefault | Function | 阻止时间改变 |
| value | String | 新值，格式：'xx:xx:xx' |
| oldValue | String | 旧值，格式：'xx:xx:xx' |

#### @change

值变化时触发（与原生事件不同）

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | String | 改变后的值，格式：'xx:xx:xx' |
| $event.oldValue | String | 旧的值，格式：'xx:xx:xx' |

