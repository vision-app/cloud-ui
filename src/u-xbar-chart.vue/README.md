# 柱状图 XBarChart

## 示例
### 基本形式

``` html
<u-xbar-chart border title="每星期访问量" :y-axis="{ key: 'week' }" :x-axis="{ min: 0 }" :series="[{key: 'number', name: '访问量' }]" :data="[{ week: '星期一', number: 150 }, { week: '星期二', number: 300 }, { week: '星期三', number: 28 }, { week: '星期四', number: 200 }, { week: '星期五', number: 74 }, { week: '星期六', number: 532 }, { week: '星期日', number: 420 }]"></u-xbar-chart>
```

#### 命令式


``` vue
<template>
<u-xbar-chart border :title="title" :x-axis="xaxis" :y-axis="yaxis" :series="series" :data="data"></u-xbar-chart>
</template>

<script>
export default {
    data() {
        return {
            title: '每星期访问量',
            yaxis: { key: 'week' },
            xaxis: { min: 0 },
            series: [{key: 'number', name: '访问量' }],
            data: [{ week: '星期一', number: 150 }, { week: '星期二', number: 300 }, { week: '星期三', number: 28 }, { week: '星期四', number: 200 }, { week: '星期五', number: 74 }, { week: '星期六', number: 532 }, { week: '星期日', number: 420 }],
        }
    }
};
</script>
```

#### 堆叠数据

``` vue
<template>
<u-xbar-chart border :stack="stack" :title="title" :x-axis="xaxis" :y-axis="yaxis" :series="series" :data="data"></u-xbar-chart>
</template>

<script>
export default {
    data() {
        return {
            title: '每星期访问量',
            yaxis: { key: 'week' },
            xaxis: { min: 0 },
            stack: true,
            series: [{ key: 'rds' }, { key: 'ncr' }, { key: 'nce' }],
            data: [
                { week: '星期一', rds: 150, ncr: 200, nce: 50 },
                { week: '星期二', rds: 300, ncr: 340, nce: 20 },
                { week: '星期三', rds: 28, ncr: 56, nce: 28 },
                { week: '星期四', rds: 200, ncr: 78, nce: 40 },
                { week: '星期五', rds: 74, ncr: 100, nce: 74 },
                { week: '星期六', rds: 532, ncr: 200, nce: 32 },
                { week: '星期日', rds: 420, ncr: 260, nce: 20 },
            ],
        }
    }
};
</script>
```
## XBarChart API

### Attrs/Props

| Prop | Type | Default | Description |
| data | Array | | 数据：`undefined`，表示数据正在加载；如果为`[]`，表示数据为空 |
| title | String | | 标题 |
| titleAlign | String | `center` | 标题对齐方式 |
| caption | String | | 子标题 |
| series | Array | `[]` | 序列信息 |
| border | Boolean | `false` | 是否显示边框 |
| legend | Boolean | `true` | 是否显示图例 |
| xAxis | Object | `{}` | 横坐标信息 |
| yAxis | Object | `{}` | 纵坐标信息 |
| stack | Boolean | `false` | 堆叠模式 |
| order | String | `desc` | 排序方式 |
