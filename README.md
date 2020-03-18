## JSBOX JS在线运行环境 

[立即使用](https://theajack.gitee.io/jsbox)

JSBOX by theajack

这是一个在线运行调试js的项目

### 功能
1. 运行和编辑js、html、css代码
2. 加载第三方库的cdn文件
3. 导出链接，其他人使用链接可以直接使用您编辑的代码
4. 导出html文件
5. 颜色主题，风格与vscode对齐
6. 自定义log类型，自定义字体大小


### 快捷按键与按钮说明：

1. ctrl + : 放大字体
2. ctrl - : 缩小字体
3. ctrl m : 切换主题
4. ctrl d : 清空代码
5. ctrl d : 清空代码
6. ctrl s : 暂存代码：暂存之后代码会被保存起来，刷新页面或重置代码都会还原到保存的状态
7. ctrl e : 重置代码：回到初始态或暂存状态
8. ctrl q : 复制代码
9. ctrl i : 设置
10. ctrl l : 生成链接：该链接打开可以还原当前正在编辑的代码
11. ctrl e : 清空log
12. ctrl enter : 运行代码

### search参数：

1. theme=dark: 开启dark代码编辑模式，默认为normal
2. code=xxx: 设置编辑器代码，需要经过 decodeURIComponent
3. lib=Array<link|name>: 加载第三方库，可以是一个url或者[jsbox预定义的库](https://github.com/theajack/jsbox/blob/master/cdn/resources.js)，需要经过 decodeURIComponent
4. config=link: 使用自定义的配置文件
5. id=string: 使用指定的id加载代码块，需要与config参数一起使用

#### config参数

config参数应该指向一个js文件，该文件需要在window对象上定义以下json数据

```js
window.jsbox_config = {
    scripts: {
        'loadsh': 'xxx',
    },
    styles: {
        'xx': 'xx'
    },
    codes: { // 
        'helloWorld': 'console.log("Hello world")', // 默认使用上面定义的所有依赖
        'testLoadsh': {
            code: '_.cloneDeep({a:1})',
            dep: ['loadsh', 'xxx'], // 定义依赖，优先从当前文件中查找，如果没有会尝试在jsbox预定义库中查找
        },
    }
}
```

##### 说明
1. scripts: js文件cdn地址，非必需
2. styles: css样式文件cdn地址，非必需
3. codes: codes用于存储一些代码，codes中的键值既对应search参数中的id值，jsbox会加载对应的代码，如果id值为空，jsbox会加载第一个键值对应的代码，若codes为string类型，jsbox会忽略id值


### hash参数
1. #saved 使用暂存代码填充编辑器
2. #hello 进入欢迎页


### 预定义方法

在jsbox中，您可以使用以下方法
1. log(arg1,arg2,...); 打印内容
2. copy(string); 复制内容到剪切板
