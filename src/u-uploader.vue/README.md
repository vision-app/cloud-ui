# 文件上传

## 示例
### 基本形式

#### 声明式
``` html
<u-uploader url="/api/load/test">
    <u-button>upload</u-button>
</u-tooltip>
```

## Popper API
### Attrs/Props


| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| url | String | `''` | 上传文件路径，默认为空，如果不传则会触发一个upload事件将file input中的file抛出 |
| dataType | String | `'json'` | 接收数据类型。可以是：`text`、`xml`、`json` |
| data | Object | `{}` | 附加数据 |
| name | String | `'file'` | 上传文件的name,这个用作file input的name命名 |
| extensions | String | `'normal'` | 可上传的扩展名。默认为空，表示可上传任意文件类型的文件；可以为字符串，多个扩展名用`,`隔开，如：'png,jpg,gif'；也可以为数组，如：['png', 'jpg', 'gif']|
| maxSize | String | `''` | 可上传的最大文件大小。默认为空，表示可上传任意大小的文件；如果为数字，则表示单位为字节；如果为字符串，可以添加以下单位：`kB`、`MB`、`GB`|
| disabled | Boolean | `false` | 是否禁用|
| visible | Boolean | `false` | 是否显示|
| class | Boolean | `''` | 补充class|

### Events

#### @error
上传报错时触发
| Param | Type |  Description |
| --------- | ---- | ----------- |
| sender | Object | 触发组件对象 |
| name | String | 错误名 |
| message | String | 错误描述 |
| extensions | String | 限制类型 |
| maxSize | Number | 限制大小 |
| size | Number | 当前大小 |

 #### @uploader
上传事件，注意：此事件仅在未传入url时触发
| Param | Type |  Description |
| --------- | ---- | ----------- |
| sender | Object | 触发组件对象 |
| updateData | Object | 当前file中的文件 file.files|
| data | Object | 拓展数据 |

#### @progress
发送进度触发，主要用作上传进度条
| Param | Type |  Description |
| --------- | ---- | ----------- |
| sender | Object | 触发组件对象 |
| data | Object | 进度相关信息 |

#### @complete
上传完成事件
| Param | Type |  Description |
| --------- | ---- | ----------- |
| sender | Object | 触发组件对象 |
| xml | String | 服务器回传信息 |


#### @success
上传成功事件
| Param | Type |  Description |
| --------- | ---- | ----------- |
| sender | Object | 触发组件对象 |
| data | Object | 服务器回传信息对象 |
| file | Object | 上传文件信息，不包含文件主体内容 |

