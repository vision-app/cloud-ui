# 日历 Calendar

## 示例
### 基本形式

#### 声明式

### 基本
``` html
<u-calendar date="2018-08-08"></u-calendar>
```

### 只读 readonly
``` html
<u-calendar date="2018-08-08"  readonly></u-calendar>
```

### 最大值maxDate 最小值minDate
``` html
<u-calendar date="2018-08-08" min-date="2018-08-02" max-date="2018-08-18" :yearDiff="5"></u-calendar>
```

### 禁用disabled
``` html
<u-calendar date="2018-08-08" min-date="2017-08-08" max-date="2019-08-08" disabled></u-calendar>
```

## Calendar API
### Props/Attrs
| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| date | [String, Number, Date] | new Date() | 当前日期 |
| minDate | [String, Number, Date] |  | 最小日期 |
| maxDate | [String, Number, Date] |  | 最大日期 |
| disabled | Boolean | false | 禁用 |
| readonly | Boolean | false | 只读 |
| yearDiff | Number | 3 | 最小年份与今年的差 |
| yearAdd | Number | 1 | 最大年份与今年的差 |
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
| date | Date | 当前选择日期 |
#### @change @deprecated
select事件触发
| Param | Type | Description |
| ----- | ---- | ----------- |
| sender | Object | 事件发送对象 |
| date | Date | 当前选择日期 |
### Methods
#### select(date)
| Param | Type | Description |
| ----- | ---- | ----------- |
| date | Date | 选择某日期 |