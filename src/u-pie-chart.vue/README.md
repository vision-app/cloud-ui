# 饼状图 PieChart

## 示例
### 基本形式

``` html
<u-pie-chart border title="每星期访问量" :data="[{ 'percent': 25, 'key': '1', 'name': 'selector1' }, { 'percent': 25, 'key': '2', 'name': 'selector2' }, { 'percent': 20, 'key': '3', 'name': 'selector3' }, { 'percent': 30, 'key': '4', 'name': 'selector4' }]"></u-pie-chart>
```
## PieChart API

### Attrs/Props

| Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| data | Array | | 数据：`undefined`，表示数据正在加载；如果为`[]`，表示数据为空 |
| title | String | | 标题 |
| titleAlign | String | `center` | 标题对齐方式 |
| caption | String | | 子标题 |
| series | Array | `[]` | 序列信息 |
| border | Boolean | `false` | 是否显示边框 |
| legend | Boolean | `true` | 是否显示图例 |