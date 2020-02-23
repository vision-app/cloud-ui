### 基本用法

下面的例子为单文件上传。

``` vue
<template>
<u-uploader v-model="files" url="http://localhost:7000/api/library/upload">
    <u-button color="primary">Upload</u-button>
</u-uploader>
</template>
<script>
export default {
    data() {
        return {
            files: [],
        };
    },
}
</script>
```

> 注意：在IE中实现上传功能时，需要将响应头的`Content-Type`设置为`text/plain`或`text/html`，而不能是`application/json`，否则IE会提示用户下载返回的数据。

### 多文件上传

设置`multiple`可以选择多个文件，通过`value`属性可以设置已上传的文件。

``` vue
<template>
<u-uploader v-model="files" multiple url="http://localhost:7000/api/library/upload">
    <u-button color="primary">Upload</u-button>
</u-uploader>
</template>
<script>
export default {
    data() {
        return {
            files: [{
                uid: '1',
                name: 'bullseye.png',
                status: 'success',
                url: 'http://d.lanrentuku.com/down/png/1904/food-icons-const/big_breakfast.png',
            }, {
                uid: '2',
                name: 'big_breakfast.png',
                status: 'success',
                url: 'http://d.lanrentuku.com/down/png/1904/food-icons-const/big_breakfast.png',
            }],
        };
    },
};
</script>
```

### 列表类型

通过`list-type`设置列表类型。

#### 图片列表

``` vue
<template>
<u-uploader v-model="files" multiple list-type="image"
    accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
    url="http://localhost:7000/api/library/upload">
    <u-button color="primary">Upload</u-button>
</u-uploader>
</template>
<script>
export default {
    data() {
        return {
            files: [{
                uid: '1',
                name: 'bullseye.png',
                status: 'success',
                url: 'http://d.lanrentuku.com/down/png/1307/flat-jewels/bullseye.png',
            }, {
                uid: '2',
                name: 'big_breakfast.png',
                status: 'success',
                url: 'http://d.lanrentuku.com/down/png/1904/food-icons-const/big_breakfast.png',
            }],
        };
    },
};
</script>
```

#### 卡片列表

``` vue
<template>
<u-uploader v-model="files" multiple list-type="card"
    accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
    url="http://localhost:7000/api/library/upload">
    <u-button color="primary">Upload</u-button>
</u-uploader>
</template>
<script>
export default {
    data() {
        return {
            files: [{
                uid: '1',
                name: 'bullseye.png',
                status: 'success',
                url: 'http://d.lanrentuku.com/down/png/1307/flat-jewels/bullseye.png',
            }, {
                uid: '2',
                name: 'big_breakfast.png',
                status: 'success',
                url: 'http://d.lanrentuku.com/down/png/1904/food-icons-const/big_breakfast.png',
            }],
        };
    },
};
</script>
```

#### 单文件卡片

不使用`multiple`属性时，仅会显示一个卡片。可以用于头像上传、身份证上传等场景。

``` vue
<template>
<u-uploader v-model="files" list-type="card"
    accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
    url="http://localhost:7000/api/library/upload">
    <u-button color="primary">Upload</u-button>
</u-uploader>
</template>
<script>
export default {
    data() {
        return {
            files: [],
        };
    },
};
</script>
```

### 禁用状态

``` html
<u-uploader url="http://localhost:7000/api/library/upload" disabled>
    <u-button color="primary" disabled>Upload</u-button>
</u-uploader>
```
