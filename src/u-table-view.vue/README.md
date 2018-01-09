# 表格视图 TableView

## 示例

### 排序和格式化
``` vue
<template>
    <div>
        <u-table-view :data="tdata">
            <u-table-view-column title="日期" label="date" sortable></u-table-view-column>
            <u-table-view-column title="姓名" label="name" :formatter="formatter"></u-table-view-column>
            <u-table-view-column title="地址" label="address" ></u-table-view-column>
        </u-table-view>
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            tdata: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
            }, {
                date: '2016-05-04',
                name: '王大虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '天王盖地虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '小鸡炖蘑菇',
                address: '上海市普陀区金沙江路 1516 弄'
            }],
        };
    },
    methods: {
        formatter(row, column) {
            if (row.name === '天王盖地虎')
                return '逗比一号';
            else
                return row.name;
        }
    }
};
</script>
```

### 自定义排序方法
``` vue
<template>
    <u-table-view :data="tdata">
        <u-table-view-column title="日期" label="date" sortable :sort-method="sortMethod"></u-table-view-column>
        <u-table-view-column title="姓名" label="name"></u-table-view-column>
        <u-table-view-column title="地址" label="address" ></u-table-view-column>
    </u-table-view>
</template>
<script>
export default {
    data: function () {
        return {
            tdata: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
            }, {
                date: '2016-05-04',
                name: '王大虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '天王盖地虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '小鸡炖蘑菇',
                address: '上海市普陀区金沙江路 1516 弄'
            }],
        };
    },
    methods: {
        sortMethod(a, b) {
            let va = new Date(a).getTime();
            let vb = new Date(b).getTime();
            if (va -vb < 0)
                return true;
            else
                return false;
        }
    }
};
</script>
```

### 选择
``` vue
<template>
    <u-table-view :data="tdata" @selection-change="selectionChange($event)">
        <u-table-view-column type="selection"></u-table-view-column>
        <u-table-view-column title="日期" label="date" sortable></u-table-view-column>
        <u-table-view-column title="姓名" label="name" ></u-table-view-column>
        <u-table-view-column title="地址" label="address" ></u-table-view-column>
    </u-table-view>
</template>
<script>
export default {
    data: function () {
        return {
            tdata: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
            }, {
                date: '2016-05-04',
                name: '王大虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '天王盖地虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '小鸡炖蘑菇',
                address: '上海市普陀区金沙江路 1516 弄'
            }],
        };
    },
    methods: {
        formatter(row, column) {
            if (row.name === '天王盖地虎')
                return '逗比一号';
            else
                return row.name;
        },
        selectionChange(data) {
            console.log(data);
        }
    }
};
</script>
```

### 过滤
``` vue
<template>
    <u-table-view :data="tdata">
        <u-table-view-column title="日期" label="date" sortable :formatter="dateFormat"></u-table-view-column>
        <u-table-view-column title="姓名" label="name" ></u-table-view-column>
        <u-table-view-column title="地址" label="address" ></u-table-view-column>
        <u-table-view-column title="性别" label="female" filter :options="options" :value="value" :filter-method="filterMethod"></u-table-view-column>
    </u-table-view>
</template>
<script>
export default {
    data: function () {
        return {
            tdata: [{
                date: 1501977600000,
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                female: '男',
                use: 12,
                total: 20,
            }, {
                date: 1502236800000,
                name: '王大虎',
                address: '上海市普陀区金沙江路 1517 弄',
                female: '女',
                use: 12,
                total: 20,
            }, {
                date: 1503100800000,
                name: '天王盖地虎',
                address: '上海市普陀区金沙江路 1519 弄',
                female: '男',
                use: 12,
                total: 20,
            }, {
                date: 1503964800000,
                name: '小鸡炖蘑菇',
                address: '上海市普陀区金沙江路 1516 弄',
                female: '女',
                use: 12,
                total: 20,
            }],
            options: [
                {
                    name: '全部',
                    value: '',
                },
                {
                    name: '男',
                    value: '男'
                },
                {
                    name: '女',
                    value: '女'
                },
            ],
            value: ''
        };
    },
    methods: {
        filterMethod(value, columnValue) {
            if (value === '')
                return true;
            return columnValue === value;
        },
        dateFormat(row) {
            const value = row.date;
            const year = new Date(value).getFullYear();
            let month = new Date(value).getMonth() + 1;
            month += '';
            if(month.length === 1)
                month = '0' + month;
            const date = new Date(value).getDate();
            return year + '-' + month + '-' + date;
        },
    }
};
</script>
```
### 作用域插槽方式
``` vue
<template>
    <div>
        <u-table-view :data="tdata" v-show="show">
            <u-table-view-column title="日期" label="date" sortable :formatter="dateFormat"></u-table-view-column>
            <u-table-view-column title="姓名" label="name" ></u-table-view-column>
            <u-table-view-column title="地址" label="address" tooltip></u-table-view-column>
            <u-table-view-column title="性别" width="30%" label="female" filter :options="options" :value="value" :filter-method="filterMethod"></u-table-view-column>
            <u-table-view-column title="占比">
                <template scope="scope">
                    <u-button @click="click(scope.row)">配置</u-button>
                </template>
            </u-table-view-column>
        </u-table-view>
        <u-modal :visible.sync="visible">
            <div>
                <span>{{current.name}}</span>
                <span style="margin-left:10px;">{{current.address}}</span>
            </div>
        </u-modal>
        <u-button @click="show = !show"> {{show ? 'hide' : 'show'}} </u-button>
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            tdata: [{
                date: 1501977600000,
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                female: '男',
                use: 12,
                total: 20,
            }, {
                date: 1502236800000,
                name: '王大虎',
                address: '上海市普陀区金沙江路 1517 弄',
                female: '女',
                use: 12,
                total: 20,
            }, {
                date: 1503100800000,
                name: '天王盖地虎',
                address: '上海市普陀区金沙江路 1519 弄',
                female: '男',
                use: 12,
                total: 20,
            }, {
                date: 1503964800000,
                name: '小鸡炖蘑菇',
                address: '上海市普陀区金沙江路 1516 弄',
                female: '女',
                use: 12,
                total: 20,
            }],
            options: [
                {
                    name: '全部',
                    value: '',
                },
                {
                    name: '男',
                    value: '男'
                },
                {
                    name: '女',
                    value: '女'
                },
            ],
            value: '',
            current: {},
            visible: false,
            show: false,
        };
    },
    methods: {
        filterMethod(value, columnValue) {
            if (value === '')
                return true;
            return columnValue === value;
        },
        dateFormat(row) {
            const value = row.date;
            const year = new Date(value).getFullYear();
            let month = new Date(value).getMonth() + 1;
            month += '';
            if(month.length === 1)
                month = '0' + month;
            const date = new Date(value).getDate();
            return year + '-' + month + '-' + date;
        },
        click(row) {
            console.log('click');
            console.log(row);
            this.visible = true;
            this.current = row;
        },
    }
};
</script>
```
## TableView API

### Attrs/Props

| Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String |  | 标题 |
| data | Array | `[]` | 数据 |
| allChecked | Boolean | `false` | 是否全选 |
| defaultSort | Object | `{label: undefined, order: undefined}` | 排序配置 |

### Slots

| Slot | Description |
| ---- | ----------- |
| u-table-view-column | 表格列项 |

### Events 
#### @select-all
选中所有
| Param | Type | Description |
| ----- | ---- | ----------- |
| select-all | Array | 所有项 |

#### @selection-change
选中项变化
| Param | Type | Description |
| ----- | ---- | ----------- |
| selection-change | Array | 当前选中的所有项 |

#### @select
选择某项
| Param | Type | Description |
| ----- | ---- | ----------- |
| select | Array | 当前选中的所有项 |

#### @select-cancel
取消选择
| Param | Type | Description |
| ----- | ---- | ----------- |
| select-cancel | Array | 当前选中的所有项 |

## TableViewColumn API

### Attrs/Props

| Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String |  | 标题 |
| sortable | Boolean | `false` | 是否可排序 |
| label | String |  | 排序属性 |
| filter | Boolean | `false` | 是否可过滤 |
| options | Array | `[]` | 过滤选项 |
| value | [String, Number, Boolean] |  | 选择值 |
| type | String |  |  |
| formatter | Function |  | 格式化 |
| sortMethod | Function |  | 排序 |
| filterMethod | Function |  | 过滤 |
| placement | String | `'bottom-start'` |  |
| tooltip | Boolean | `fales` | 是否显示提示 |


### Slots

| Slot | Description |
| ---- | ----------- |
| - | - |


