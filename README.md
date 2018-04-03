# vue-component

> A Vue.js project   
> v1.0.1

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080

----------


# 开发模式 #

### webpack 配置 ###

在开发模式时，build/webpack.base.conf.js 文件中 entry 需要更改，更改如下：
    `
	  entry: {
	    app: './src/main.js'  //在开发模式 dev 时使用
	  },
	`
### 命令 ###
	`
		npm start
	`

### 页面跳转加载相应组件 ###
在router/index.js 配置跳转的页面，匹配的组件等。

----------


# 发布script版本

### webpack 配置 ###
在打包模式时，build/webpack.base.conf.js 文件中 entry 入口需要更改，更改如下：
    
	`
  entry: {
    gdComponents: './src/lib/index.js'
  },
	`

### 更改index.js代码 ###
将需要打包的组件引入 lib/index.js 中，然后输入命令
	`
		npm run build
	`

### 最终文件位置： ###
打包后的css和js在dist/static中



### 测试script版本 ### 
打开 dist/testHtml/index.html


```
