# 颜色选择扩展 SelectColor

## 示例
### 基本形式
``` vue
<template>
<u-color-select :options="options" :value="value" @select="select($event.value)"></u-color-select>
</template>

<script>
export default {
    data() {
        return {
            value: '#EE867D',
            options: [
                {
                    value: '#EE867D',
                },
                {
                    value:'#805DCF'
                },
                {
                    value:'#40CCCA'
                },
                {
                    value:'#FFCA12'
                },
                {
                    value:'#30A8DC'
                },
                {
                    value:'#E1AEF6'
                },
                {
                    value:'#D2D2D2'
                },
            ],
        };
    },
    methods: {
        select(value) {
            console.log(value);
            this.value = value;
        }
    },
};
</script>
```
### 只读
``` vue
<template>
<u-color-select :options="options" :value="value" @select="select($event.value)" readonly></u-color-select>
</template>

<script>
export default {
    data() {
        return {
            value: '#EE867D',
            options: [
                {
                    value: '#EE867D',
                },
                {
                    value:'#805DCF'
                },
                {
                    value:'#40CCCA'
                },
                {
                    value:'#FFCA12'
                },
                {
                    value:'#30A8DC'
                },
                {
                    value:'#E1AEF6'
                },
                {
                    value:'#D2D2D2'
                },
            ],
        };
    },
    methods: {
        select(value) {
            console.log(value);
            this.value = value;
        }
    },
};
</script>
```
### 禁用
``` vue
<template>
<u-color-select :options="options" :value="value" @select="select($event.value)" disabled></u-color-select>
</template>

<script>
export default {
    data() {
        return {
            value: '#805DCF',
            options: [
                {
                    value: '#EE867D',
                },
                {
                    value:'#805DCF'
                },
                {
                    value:'#40CCCA'
                },
                {
                    value:'#FFCA12'
                },
                {
                    value:'#30A8DC'
                },
                {
                    value:'#E1AEF6'
                },
                {
                    value:'#D2D2D2'
                },
            ],
        };
    },
    methods: {
        select(value) {
            console.log(value);
            this.value = value;
        }
    },
};
</script>
```
## SelectColor API
### Props/Attrs
| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| options | Array | [] | 选项列表 |
| readonly | Boolean | false | 只读 |
| disabled | Boolean | false | 禁用 |
| value | String | '' | 初始选择颜色的value |

### Events 
待修改

