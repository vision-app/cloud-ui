"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-seagreen/vusion-icon-font.ttf?a2407565c6e0adf600a5d3caf8be16a1") format("truetype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.eot?a2407565c6e0adf600a5d3caf8be16a1#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.woff?a2407565c6e0adf600a5d3caf8be16a1") format("woff"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.svg?a2407565c6e0adf600a5d3caf8be16a1#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-seagreen/vusion-icon-font.ttf?a2407565c6e0adf600a5d3caf8be16a1") format("truetype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.eot?a2407565c6e0adf600a5d3caf8be16a1#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.woff?a2407565c6e0adf600a5d3caf8be16a1") format("woff"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.svg?a2407565c6e0adf600a5d3caf8be16a1#vusion-icon-font") format("svg");\n}'},webpackJsonp([61],{505:function(t,e,v){var s="ICON-FONT-FILE-STYLE";function a(t){return(t||window.ICON_FONT_STYLE).styleContent||""}function r(t){var e=document.createElement("style"),v=document.getElementsByTagName("head")[0];e.innerHTML=a(t),e.id=s,e.type="text/css",v?v.appendChild(e):window.addEventListener("load",function(){v.appendChild(e)})}t.exports=function(){window.HAS_CREATE_FONT_STYLE||(r(),window.HAS_CREATE_FONT_STYLE=!0)}},578:function(t,e,v){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",[v("u-draggable",{attrs:{value:"primary"}},[v("u-block",{attrs:{size:"normal",color:"primary",inline:""}},[t._v("拖我")])],1),v("u-draggable",{attrs:{value:"success"}},[v("u-block",{attrs:{size:"normal",color:"success",inline:""}},[t._v("拖我")])],1),v("u-draggable",{attrs:{value:"error"}},[v("u-block",{attrs:{size:"normal",color:"error",inline:""}},[t._v("拖我")])],1),v("p"),v("u-droppable",{on:{drop:function(e){t.color=e.value}}},[v("u-block",{attrs:{size:"normal",color:t.color}},[t._v("放到这里")])],1)],1)},staticRenderFns:[]},a={components:{C687e22:v(0)({data:function(){return{color:""}}},s,!1,null,null,null).exports}},r={render:function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("u-article",[v("h1",[t._v("放置 Draggable")]),v("h2",[t._v("示例")]),v("h3",[t._v("基本形式")]),v("div",{staticClass:"u-example"},[v("C687e22")],1),v("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[v("code",{attrs:{"v-pre":""}},[v("span",{attrs:{class:"hljs-tag"}},[t._v("<"),v("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),v("span",{attrs:{class:"hljs-tag"}},[t._v("<"),v("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n    "),v("span",{attrs:{class:"hljs-tag"}},[t._v("<"),v("span",{attrs:{class:"hljs-name"}},[t._v("u-draggable")]),t._v(" "),v("span",{attrs:{class:"hljs-attr"}},[t._v("value")]),t._v("="),v("span",{attrs:{class:"hljs-string"}},[t._v('"primary"')]),t._v(">")]),t._v("\n        "),v("span",{attrs:{class:"hljs-tag"}},[t._v("<"),v("span",{attrs:{class:"hljs-name"}},[t._v("u-block")]),t._v(" "),v("span",{attrs:{class:"hljs-attr"}},[t._v("size")]),t._v("="),v("span",{attrs:{class:"hljs-string"}},[t._v('"normal"')]),t._v(" "),v("span",{attrs:{class:"hljs-attr"}},[t._v("color")]),t._v("="),v("span",{attrs:{class:"hljs-string"}},[t._v('"primary"')]),t._v(" "),v("span",{attrs:{class:"hljs-attr"}},[t._v("inline")]),t._v(">")]),t._v("拖我"),v("span",{attrs:{class:"hljs-tag"}},[t._v("</"),v("span",{attrs:{class:"hljs-name"}},[t._v("u-block")]),t._v(">")]),t._v("\n    "),v("span",{attrs:{class:"hljs-tag"}},[t._v("</"),v("span",{attrs:{class:"hljs-name"}},[t._v("u-draggable")]),t._v(">")]),t._v("\n    "),v("span",{attrs:{class:"hljs-tag"}},[t._v("<"),v("span",{attrs:{class:"hljs-name"}},[t._v("u-draggable")]),t._v(" "),v("span",{attrs:{class:"hljs-attr"}},[t._v("value")]),t._v("="),v("span",{attrs:{class:"hljs-string"}},[t._v('"success"')]),t._v(">")]),t._v("\n        "),v("span",{attrs:{class:"hljs-tag"}},[t._v("<"),v("span",{attrs:{class:"hljs-name"}},[t._v("u-block")]),t._v(" "),v("span",{attrs:{class:"hljs-attr"}},[t._v("size")]),t._v("="),v("span",{attrs:{class:"hljs-string"}},[t._v('"normal"')]),t._v(" "),v("span",{attrs:{class:"hljs-attr"}},[t._v("color")]),t._v("="),v("span",{attrs:{class:"hljs-string"}},[t._v('"success"')]),t._v(" "),v("span",{attrs:{class:"hljs-attr"}},[t._v("inline")]),t._v(">")]),t._v("拖我"),v("span",{attrs:{class:"hljs-tag"}},[t._v("</"),v("span",{attrs:{class:"hljs-name"}},[t._v("u-block")]),t._v(">")]),t._v("\n    "),v("span",{attrs:{class:"hljs-tag"}},[t._v("</"),v("span",{attrs:{class:"hljs-name"}},[t._v("u-draggable")]),t._v(">")]),t._v("\n    "),v("span",{attrs:{class:"hljs-tag"}},[t._v("<"),v("span",{attrs:{class:"hljs-name"}},[t._v("u-draggable")]),t._v(" "),v("span",{attrs:{class:"hljs-attr"}},[t._v("value")]),t._v("="),v("span",{attrs:{class:"hljs-string"}},[t._v('"error"')]),t._v(">")]),t._v("\n        "),v("span",{attrs:{class:"hljs-tag"}},[t._v("<"),v("span",{attrs:{class:"hljs-name"}},[t._v("u-block")]),t._v(" "),v("span",{attrs:{class:"hljs-attr"}},[t._v("size")]),t._v("="),v("span",{attrs:{class:"hljs-string"}},[t._v('"normal"')]),t._v(" "),v("span",{attrs:{class:"hljs-attr"}},[t._v("color")]),t._v("="),v("span",{attrs:{class:"hljs-string"}},[t._v('"error"')]),t._v(" "),v("span",{attrs:{class:"hljs-attr"}},[t._v("inline")]),t._v(">")]),t._v("拖我"),v("span",{attrs:{class:"hljs-tag"}},[t._v("</"),v("span",{attrs:{class:"hljs-name"}},[t._v("u-block")]),t._v(">")]),t._v("\n    "),v("span",{attrs:{class:"hljs-tag"}},[t._v("</"),v("span",{attrs:{class:"hljs-name"}},[t._v("u-draggable")]),t._v(">")]),t._v("\n    "),v("span",{attrs:{class:"hljs-tag"}},[t._v("<"),v("span",{attrs:{class:"hljs-name"}},[t._v("p")]),t._v(">")]),v("span",{attrs:{class:"hljs-tag"}},[t._v("</"),v("span",{attrs:{class:"hljs-name"}},[t._v("p")]),t._v(">")]),t._v("\n    "),v("span",{attrs:{class:"hljs-tag"}},[t._v("<"),v("span",{attrs:{class:"hljs-name"}},[t._v("u-droppable")]),t._v(" "),v("span",{attrs:{class:"hljs-attr"}},[t._v("@drop")]),t._v("="),v("span",{attrs:{class:"hljs-string"}},[t._v('"color = $event.value"')]),t._v(">")]),t._v("\n        "),v("span",{attrs:{class:"hljs-tag"}},[t._v("<"),v("span",{attrs:{class:"hljs-name"}},[t._v("u-block")]),t._v(" "),v("span",{attrs:{class:"hljs-attr"}},[t._v("size")]),t._v("="),v("span",{attrs:{class:"hljs-string"}},[t._v('"normal"')]),t._v(" "),v("span",{attrs:{class:"hljs-attr"}},[t._v(":color")]),t._v("="),v("span",{attrs:{class:"hljs-string"}},[t._v('"color"')]),t._v(">")]),t._v("放到这里"),v("span",{attrs:{class:"hljs-tag"}},[t._v("</"),v("span",{attrs:{class:"hljs-name"}},[t._v("u-block")]),t._v(">")]),t._v("\n    "),v("span",{attrs:{class:"hljs-tag"}},[t._v("</"),v("span",{attrs:{class:"hljs-name"}},[t._v("u-droppable")]),t._v(">")]),t._v("\n"),v("span",{attrs:{class:"hljs-tag"}},[t._v("</"),v("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),v("span",{attrs:{class:"hljs-tag"}},[t._v("</"),v("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n\n"),v("span",{attrs:{class:"hljs-tag"}},[t._v("<"),v("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),v("span",{attrs:{class:"javascript"}},[t._v("\n"),v("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),v("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n        "),v("span",{attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n            "),v("span",{attrs:{class:"hljs-attr"}},[t._v("color")]),t._v(": "),v("span",{attrs:{class:"hljs-string"}},[t._v("''")]),t._v(",\n        };\n    },\n};\n")]),v("span",{attrs:{class:"hljs-tag"}},[t._v("</"),v("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])]),v("h2",[t._v("API")]),v("h3",[t._v("Props/Attrs")]),v("table",[v("thead",[v("tr",[v("th",[t._v("Prop/Attr")]),v("th",[t._v("Type")]),v("th",[t._v("Default")]),v("th",[t._v("Description")])])]),v("tbody",[v("tr",[v("td",[t._v("disabled")]),v("td",[t._v("Boolean")]),v("td",[v("code",{pre:!0},[t._v("false")])]),v("td",[t._v("是否禁用")])])])]),v("h3",[t._v("Slots")]),v("h4",[t._v("(default)")]),v("p",[t._v("插入可以放置的元素，仅一个。")]),v("h4",[t._v("transfer")]),v("p",[t._v("自定义的移动元素。")]),v("h4",[t._v("@dragenter")]),v("p",[t._v("拖拽进入该元素时触发")]),v("table",[v("thead",[v("tr",[v("th",[t._v("Param")]),v("th",[t._v("Type")]),v("th",[t._v("Description")])])]),v("tbody",[v("tr",[v("td",[t._v("$event.originVM")]),v("td",[t._v("VueComponent")]),v("td",[t._v("拖拽源，为当前的"),v("code",{pre:!0},[t._v("<u-draggable>")])])]),v("tr",[v("td",[t._v("$event.sourceEl")]),v("td",[t._v("Element")]),v("td",[t._v("拖拽起始元素")])]),v("tr",[v("td",[t._v("$event.transferEl")]),v("td",[t._v("Element")]),v("td",[t._v("拖拽移动元素")])]),v("tr",[v("td",[t._v("$event.targetEl")]),v("td",[t._v("Element")]),v("td",[t._v("放置目标元素")])]),v("tr",[v("td",[t._v("$event.value")]),v("td",[t._v("Any")]),v("td",[t._v("需要传递的值")])]),v("tr",[v("td",[t._v("$event.screenX")]),v("td",[t._v("Number")]),v("td",[t._v("鼠标指针相对于屏幕的水平坐标")])]),v("tr",[v("td",[t._v("$event.screenY")]),v("td",[t._v("Number")]),v("td",[t._v("鼠标指针相对于屏幕的垂直坐标")])]),v("tr",[v("td",[t._v("$event.clientX")]),v("td",[t._v("Number")]),v("td",[t._v("鼠标指针相对于浏览器的水平坐标")])]),v("tr",[v("td",[t._v("$event.clientY")]),v("td",[t._v("Number")]),v("td",[t._v("鼠标指针相对于浏览器的垂直坐标")])]),v("tr",[v("td",[t._v("$event.pageX")]),v("td",[t._v("Number")]),v("td",[t._v("鼠标指针相对于页面的水平坐标")])]),v("tr",[v("td",[t._v("$event.pageY")]),v("td",[t._v("Number")]),v("td",[t._v("鼠标指针相对于页面的垂直坐标")])]),v("tr",[v("td",[t._v("$event.startX")]),v("td",[t._v("Number")]),v("td",[t._v("拖拽开始时鼠标指针的水平坐标")])]),v("tr",[v("td",[t._v("$event.startY")]),v("td",[t._v("Number")]),v("td",[t._v("拖拽开始时鼠标指针的垂直坐标")])]),v("tr",[v("td",[t._v("$event.dragX")]),v("td",[t._v("Number")]),v("td",[t._v("拖拽时鼠标指针相对于起始坐标的水平位移")])]),v("tr",[v("td",[t._v("$event.dragY")]),v("td",[t._v("Number")]),v("td",[t._v("拖拽时鼠标指针相对于起始坐标的垂直位移")])]),v("tr",[v("td",[t._v("$event.startLeft")]),v("td",[t._v("Number")]),v("td",[t._v("拖拽开始时代理元素的left值")])]),v("tr",[v("td",[t._v("$event.startTop")]),v("td",[t._v("Number")]),v("td",[t._v("拖拽开始时代理元素的top值")])]),v("tr",[v("td",[t._v("$event.left")]),v("td",[t._v("Number")]),v("td",[t._v("拖拽时代理元素的left值")])]),v("tr",[v("td",[t._v("$event.top")]),v("td",[t._v("Number")]),v("td",[t._v("拖拽时代理元素的top值")])]),v("tr",[v("td",[t._v("$event.preventDefault")]),v("td",[t._v("Function")]),v("td",[t._v("阻止拖拽流程")])])])]),v("h4",[t._v("@dragleave")]),v("p",[t._v("拖拽离开该元素时触发")]),v("table",[v("thead",[v("tr",[v("th",[t._v("Param")]),v("th",[t._v("Type")]),v("th",[t._v("Description")])])]),v("tbody",[v("tr",[v("td",[t._v("$event.originVM")]),v("td",[t._v("VueComponent")]),v("td",[t._v("拖拽源，为当前的"),v("code",{pre:!0},[t._v("<u-draggable>")])])]),v("tr",[v("td",[t._v("$event.sourceEl")]),v("td",[t._v("Element")]),v("td",[t._v("拖拽起始元素")])]),v("tr",[v("td",[t._v("$event.transferEl")]),v("td",[t._v("Element")]),v("td",[t._v("拖拽移动元素")])]),v("tr",[v("td",[t._v("$event.targetEl")]),v("td",[t._v("Element")]),v("td",[t._v("放置目标元素")])]),v("tr",[v("td",[t._v("$event.value")]),v("td",[t._v("Any")]),v("td",[t._v("需要传递的值")])]),v("tr",[v("td",[t._v("$event.screenX")]),v("td",[t._v("Number")]),v("td",[t._v("鼠标指针相对于屏幕的水平坐标")])]),v("tr",[v("td",[t._v("$event.screenY")]),v("td",[t._v("Number")]),v("td",[t._v("鼠标指针相对于屏幕的垂直坐标")])]),v("tr",[v("td",[t._v("$event.clientX")]),v("td",[t._v("Number")]),v("td",[t._v("鼠标指针相对于浏览器的水平坐标")])]),v("tr",[v("td",[t._v("$event.clientY")]),v("td",[t._v("Number")]),v("td",[t._v("鼠标指针相对于浏览器的垂直坐标")])]),v("tr",[v("td",[t._v("$event.pageX")]),v("td",[t._v("Number")]),v("td",[t._v("鼠标指针相对于页面的水平坐标")])]),v("tr",[v("td",[t._v("$event.pageY")]),v("td",[t._v("Number")]),v("td",[t._v("鼠标指针相对于页面的垂直坐标")])]),v("tr",[v("td",[t._v("$event.startX")]),v("td",[t._v("Number")]),v("td",[t._v("拖拽开始时鼠标指针的水平坐标")])]),v("tr",[v("td",[t._v("$event.startY")]),v("td",[t._v("Number")]),v("td",[t._v("拖拽开始时鼠标指针的垂直坐标")])]),v("tr",[v("td",[t._v("$event.dragX")]),v("td",[t._v("Number")]),v("td",[t._v("拖拽时鼠标指针相对于起始坐标的水平位移")])]),v("tr",[v("td",[t._v("$event.dragY")]),v("td",[t._v("Number")]),v("td",[t._v("拖拽时鼠标指针相对于起始坐标的垂直位移")])]),v("tr",[v("td",[t._v("$event.startLeft")]),v("td",[t._v("Number")]),v("td",[t._v("拖拽开始时代理元素的left值")])]),v("tr",[v("td",[t._v("$event.startTop")]),v("td",[t._v("Number")]),v("td",[t._v("拖拽开始时代理元素的top值")])]),v("tr",[v("td",[t._v("$event.left")]),v("td",[t._v("Number")]),v("td",[t._v("拖拽时代理元素的left值")])]),v("tr",[v("td",[t._v("$event.top")]),v("td",[t._v("Number")]),v("td",[t._v("拖拽时代理元素的top值")])]),v("tr",[v("td",[t._v("$event.preventDefault")]),v("td",[t._v("Function")]),v("td",[t._v("阻止拖拽流程")])])])]),v("h4",[t._v("@dragover")]),v("p",[t._v("拖拽在该元素上方时触发")]),v("table",[v("thead",[v("tr",[v("th",[t._v("Param")]),v("th",[t._v("Type")]),v("th",[t._v("Description")])])]),v("tbody",[v("tr",[v("td",[t._v("$event.originVM")]),v("td",[t._v("VueComponent")]),v("td",[t._v("拖拽源，为当前的"),v("code",{pre:!0},[t._v("<u-draggable>")])])]),v("tr",[v("td",[t._v("$event.sourceEl")]),v("td",[t._v("Element")]),v("td",[t._v("拖拽起始元素")])]),v("tr",[v("td",[t._v("$event.transferEl")]),v("td",[t._v("Element")]),v("td",[t._v("拖拽移动元素")])]),v("tr",[v("td",[t._v("$event.targetEl")]),v("td",[t._v("Element")]),v("td",[t._v("放置目标元素")])]),v("tr",[v("td",[t._v("$event.value")]),v("td",[t._v("Any")]),v("td",[t._v("需要传递的值")])]),v("tr",[v("td",[t._v("$event.ratioX")]),v("td",[t._v("Number")]),v("td",[t._v("鼠标指针相对于接收元素所占的长度比")])]),v("tr",[v("td",[t._v("$event.ratioY")]),v("td",[t._v("Number")]),v("td",[t._v("鼠标指针相对于接收元素所占的高度比")])]),v("tr",[v("td",[t._v("$event.screenX")]),v("td",[t._v("Number")]),v("td",[t._v("鼠标指针相对于屏幕的水平坐标")])]),v("tr",[v("td",[t._v("$event.screenY")]),v("td",[t._v("Number")]),v("td",[t._v("鼠标指针相对于屏幕的垂直坐标")])]),v("tr",[v("td",[t._v("$event.clientX")]),v("td",[t._v("Number")]),v("td",[t._v("鼠标指针相对于浏览器的水平坐标")])]),v("tr",[v("td",[t._v("$event.clientY")]),v("td",[t._v("Number")]),v("td",[t._v("鼠标指针相对于浏览器的垂直坐标")])]),v("tr",[v("td",[t._v("$event.pageX")]),v("td",[t._v("Number")]),v("td",[t._v("鼠标指针相对于页面的水平坐标")])]),v("tr",[v("td",[t._v("$event.pageY")]),v("td",[t._v("Number")]),v("td",[t._v("鼠标指针相对于页面的垂直坐标")])]),v("tr",[v("td",[t._v("$event.startX")]),v("td",[t._v("Number")]),v("td",[t._v("拖拽开始时鼠标指针的水平坐标")])]),v("tr",[v("td",[t._v("$event.startY")]),v("td",[t._v("Number")]),v("td",[t._v("拖拽开始时鼠标指针的垂直坐标")])]),v("tr",[v("td",[t._v("$event.dragX")]),v("td",[t._v("Number")]),v("td",[t._v("拖拽时鼠标指针相对于起始坐标的水平位移")])]),v("tr",[v("td",[t._v("$event.dragY")]),v("td",[t._v("Number")]),v("td",[t._v("拖拽时鼠标指针相对于起始坐标的垂直位移")])]),v("tr",[v("td",[t._v("$event.startLeft")]),v("td",[t._v("Number")]),v("td",[t._v("拖拽开始时代理元素的left值")])]),v("tr",[v("td",[t._v("$event.startTop")]),v("td",[t._v("Number")]),v("td",[t._v("拖拽开始时代理元素的top值")])]),v("tr",[v("td",[t._v("$event.left")]),v("td",[t._v("Number")]),v("td",[t._v("拖拽时代理元素的left值")])]),v("tr",[v("td",[t._v("$event.top")]),v("td",[t._v("Number")]),v("td",[t._v("拖拽时代理元素的top值")])]),v("tr",[v("td",[t._v("$event.preventDefault")]),v("td",[t._v("Function")]),v("td",[t._v("阻止拖拽流程")])])])]),v("h4",[t._v("@drop")]),v("p",[t._v("拖拽放置时触发")]),v("table",[v("thead",[v("tr",[v("th",[t._v("Param")]),v("th",[t._v("Type")]),v("th",[t._v("Description")])])]),v("tbody",[v("tr",[v("td",[t._v("$event.originVM")]),v("td",[t._v("VueComponent")]),v("td",[t._v("拖拽源，为当前的"),v("code",{pre:!0},[t._v("<u-draggable>")])])]),v("tr",[v("td",[t._v("$event.sourceEl")]),v("td",[t._v("Element")]),v("td",[t._v("拖拽起始元素")])]),v("tr",[v("td",[t._v("$event.transferEl")]),v("td",[t._v("Element")]),v("td",[t._v("拖拽移动元素")])]),v("tr",[v("td",[t._v("$event.targetEl")]),v("td",[t._v("Element")]),v("td",[t._v("放置目标元素")])]),v("tr",[v("td",[t._v("$event.value")]),v("td",[t._v("Any")]),v("td",[t._v("需要传递的值")])]),v("tr",[v("td",[t._v("$event.ratioX")]),v("td",[t._v("Number")]),v("td",[t._v("鼠标指针相对于接收元素所占的长度比")])]),v("tr",[v("td",[t._v("$event.ratioY")]),v("td",[t._v("Number")]),v("td",[t._v("鼠标指针相对于接收元素所占的高度比")])]),v("tr",[v("td",[t._v("$event.screenX")]),v("td",[t._v("Number")]),v("td",[t._v("鼠标指针相对于屏幕的水平坐标")])]),v("tr",[v("td",[t._v("$event.screenY")]),v("td",[t._v("Number")]),v("td",[t._v("鼠标指针相对于屏幕的垂直坐标")])]),v("tr",[v("td",[t._v("$event.clientX")]),v("td",[t._v("Number")]),v("td",[t._v("鼠标指针相对于浏览器的水平坐标")])]),v("tr",[v("td",[t._v("$event.clientY")]),v("td",[t._v("Number")]),v("td",[t._v("鼠标指针相对于浏览器的垂直坐标")])]),v("tr",[v("td",[t._v("$event.pageX")]),v("td",[t._v("Number")]),v("td",[t._v("鼠标指针相对于页面的水平坐标")])]),v("tr",[v("td",[t._v("$event.pageY")]),v("td",[t._v("Number")]),v("td",[t._v("鼠标指针相对于页面的垂直坐标")])]),v("tr",[v("td",[t._v("$event.startX")]),v("td",[t._v("Number")]),v("td",[t._v("拖拽开始时鼠标指针的水平坐标")])]),v("tr",[v("td",[t._v("$event.startY")]),v("td",[t._v("Number")]),v("td",[t._v("拖拽开始时鼠标指针的垂直坐标")])]),v("tr",[v("td",[t._v("$event.dragX")]),v("td",[t._v("Number")]),v("td",[t._v("拖拽时鼠标指针相对于起始坐标的水平位移")])]),v("tr",[v("td",[t._v("$event.dragY")]),v("td",[t._v("Number")]),v("td",[t._v("拖拽时鼠标指针相对于起始坐标的垂直位移")])]),v("tr",[v("td",[t._v("$event.startLeft")]),v("td",[t._v("Number")]),v("td",[t._v("拖拽开始时代理元素的left值")])]),v("tr",[v("td",[t._v("$event.startTop")]),v("td",[t._v("Number")]),v("td",[t._v("拖拽开始时代理元素的top值")])]),v("tr",[v("td",[t._v("$event.left")]),v("td",[t._v("Number")]),v("td",[t._v("拖拽时代理元素的left值")])]),v("tr",[v("td",[t._v("$event.top")]),v("td",[t._v("Number")]),v("td",[t._v("拖拽时代理元素的top值")])]),v("tr",[v("td",[t._v("$event.preventDefault")]),v("td",[t._v("Function")]),v("td",[t._v("阻止拖拽流程")])])])]),v("h3",[t._v("Methods")]),v("h4",[t._v("cancel()")]),v("p",[t._v("取消拖拽。")])])},staticRenderFns:[]},_=v(0)(a,r,!1,null,null,null);e.default=_.exports}});