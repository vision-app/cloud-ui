### 基本样式

``` html
<u-tablets>
    <u-tablet>Apple</u-tablet>
    <u-tablet>Banana</u-tablet>
    <u-tablet>Cake</u-tablet>
</u-tablets>
```

### 选择值

``` html
<u-tablets value="C">
    <u-tablet value="A">Apple</u-tablet>
    <u-tablet value="B">Banana</u-tablet>
    <u-tablet value="C">Cake</u-tablet>
</u-tablets>
```

### 只读、禁用、禁用某一项

``` html
<u-linear-layout>
<u-tablets value="C" readonly>
    <u-tablet value="A">Apple</u-tablet>
    <u-tablet value="B">Banana</u-tablet>
    <u-tablet value="C">Cake</u-tablet>
</u-tablets>
<u-tablets value="C" disabled>
    <u-tablet value="A">Apple</u-tablet>
    <u-tablet value="B">Banana</u-tablet>
    <u-tablet value="C">Cake</u-tablet>
</u-tablets>
<u-tablets value="C">
    <u-tablet value="A">Apple</u-tablet>
    <u-tablet value="B" disabled>Banana</u-tablet>
    <u-tablet value="C">Cake</u-tablet>
</u-tablets>
</u-linear-layout>
```

### 可取消

点击两次同一项，可取消状态

``` html
<u-tablets value="C" cancelable>
    <u-tablet value="A">Apple</u-tablet>
    <u-tablet value="B">Banana</u-tablet>
    <u-tablet value="C">Cake</u-tablet>
</u-tablets>
```

### 多项选择

绑定`value`属性，可以用`v-model`或`:value.sync`。

``` html
<u-tablets :value="['B', 'C']" multiple>
    <u-tablet value="A">Apple</u-tablet>
    <u-tablet value="B">Banana</u-tablet>
    <u-tablet value="C">Cake</u-tablet>
</u-tablets>
```
