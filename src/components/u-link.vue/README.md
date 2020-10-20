<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# ULink 链接

- [示例](#示例)
    - [基本用法](#基本用法)
    - [设置颜色](#设置颜色)
    - [禁用状态](#禁用状态)
    - [块级展示](#块级展示)
- [API]()
    - [Props/Attrs](#propsattrs)
    - [Slots](#slots)
    - [Events](#events)

**路由链接**, **行内展示**

文字超链接。

## 示例
### 基本用法

除了`<a>`标签的`href`和`target`基础属性，增加了类似`<router-link>`的`to`、`replace`和`append`属性等。

``` html
<u-link href="https://vusion.github.io" target="_blank">普通链接</u-link>&nbsp;
<u-link to="/components/u-button">路由链接</u-link>
```

### 设置颜色

用`color`属性修改颜色。

``` html
<u-link href="#">默认颜色</u-link>&nbsp;
<u-link href="#" color="light">
    浅色链接<u-tooltip>
        <u-link href="#" color="light">浅色链接</u-link>一般用于深色背景
    </u-tooltip>
</u-link>&nbsp;
<u-link color="success">成功链接</u-link>&nbsp;
<u-link color="warning">警告链接</u-link>&nbsp;
<u-link color="danger">危险链接</u-link>&nbsp;
```

### 禁用状态

链接在禁用状态下，不会响应点击事件。

``` html
<u-link href="https://vusion.github.io" target="_blank" disabled>禁用链接</u-link>
```

### 块级展示

使用`display="block"`可以快速将链接宽度充满整行。

``` html
<u-link color="secondary">行内链接</u-link>与周围其他文字保持在同一行。
<u-link display="block" color="secondary">块级链接</u-link>宽度充满整行。
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| href | string |  |  | 链接地址 |
| target | string |  |  | （原生属性） |
| to | string \| Location |  |  | 需要 vue-router，与`<router-link>`的`to`属性相同。可以是一个字符串或者是描述目标位置的对象。 |
| replace | boolean |  | `false` | 需要 vue-router，与`<router-link>`的`replace`属性相同。如果为`true`，当点击时，会调用`router.replace()`而不是`router.push()`，于是导航后不会留下`history `记录。 |
| append | boolean |  | `false` | 需要 vue-router，与`<router-link>`的`append`属性相同。如果为`true`，则在当前路径后追加`to`的路径。 |
| disabled | boolean |  | `false` | 是否禁用。禁用后不会响应`click`事件。 |
| color | enum | `'default'`<br/>`'light'`<br/>`'success'`<br/>`'warning'`<br/>`'danger'`<br/>`'error'` | `'default'` | 设置颜色。 |
| display | string |  | `'inline'` | 展示方式。可选值：`'inline'`, `'block'` |

### Slots

#### (default)

插入文本或 HTML。

### Events

#### @$listeners

监听所有`<a>`元素的事件。

| Param | Type | Description |
| ----- | ---- | ----------- |

#### @click

点击链接时触发，与原生 click 事件不同的是，它只会在非禁用状态下触发。

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | MouseEvent | 鼠标事件对象 |
| senderVM | Vue | 发送事件实例 |

#### @before-navigate

使用 router 相关属性切换路由前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.to | string, Location | `to`属性的值 |
| $event.replace | boolean | `replace`属性的值 |
| $event.append | boolean | `append`属性的值 |
| $event.preventDefault | Function | 阻止切换流程 |
| senderVM | Vue | 发送事件实例 |

#### @navigate

使用 router 相关属性切换路由时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.to | string, Location | `to`属性的值 |
| $event.replace | boolean | `replace`属性的值 |
| $event.append | boolean | `append`属性的值 |
| senderVM | Vue | 发送事件实例 |

