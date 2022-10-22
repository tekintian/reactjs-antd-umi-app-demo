# Ant Design入门

什么是Ant Design？

Ant Design是阿里蚂蚁金服团队基于React开发的ui组件，主要用于中后台系统的使用。

官网：https://ant.design/index-cn

##设计语言：

随着商业化的趋势，越来越多的企业级产品对更好的用户体验有了进一步的要求。
带着这样的一个终极目标，我们（蚂蚁金服体验技术部）经过大量的项目实践和总结，逐步打磨出一个服务于企业级产品的设计体系 Ant Design。基于『确定』和『自然』的设计价值观，通过模块化的解决方案，降低冗余的生产成本，让设计者专注于更好的用户体验。

##特性：
提炼自企业级中后台产品的交互语言和视觉风格。
开箱即用的高质量 React 组件。
使用 TypeScript 构建，提供完整的类型定义文件。
全链路开发和设计工具体系。

##开始使用

2.2.1、引入Ant Design

Ant Design 是一个服务于企业级产品的设计体系，组件库是它的 React 实现，antd 被发布为一个 npm 包方便开发者安装并使用。
在 umi 中，你可以通过在插件集 umi-plugin-react 中配置 antd 打开 antd 插件，antd
插件会帮你引入 antd 并实现按需编译。
在config.js文件中进行配置：
~~~js
export default {
plugins: [
  ['umi‐plugin‐react', {
    dva: true, // 开启dva功能
    antd: true // 开启Ant Design功能
    }]
  ]
};
~~~

## 布局

antd布局：https://ant.design/components/layout-cn/

在后台系统页面布局中，往往是经典的三部分布局，像这样：

组件概述

Layout ：布局容器，其下可嵌套 Header Sider Content Footer 或 Layout 本

身，可以放在任何父容器中。

Header ：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。

Sider ：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在

Layout 中。

Content ：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 Layout

中。

Footer ：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。



**需要特别说明的是，在umi中约定的目录结构中，layouts/index.js文件将被作为全局的布局文件。**

接下来，配置路由：（非必须）

config.js文件：

~~~js
export default {
plugins: [
['umi‐plugin‐react', {
dva: true, // 开启dva功能
antd: true // 开启Ant Design功能
}]
],
routes: [{
path: '/',
component: '../layouts' //配置布局路由
}]
};
~~~





# Ant Design Pro

Ant Design Pro 是基于Ant Design的一个开箱即用的，企业级中后台前端/设计解决方

案。

Ant Design Pro提供的目录如下：

~~~html
├── config # umi 配置，包含路由，构建等配置
├── mock # 本地模拟数据
├── public
│ └── favicon.png # Favicon
├── src
│ ├── assets # 本地静态资源
│ ├── components # 业务通用组件
│ ├── e2e # 集成测试用例
│ ├── layouts # 通用布局
│ ├── models # 全局 dva model
│ ├── pages # 业务页面入口和常用模板
│ ├── services # 后台接口服务
│ ├── utils # 工具库
│ ├── locales # 国际化资源
│ ├── global.less # 全局样式
│ └── global.js # 全局 JS
├── tests # 测试工具
├── README.md
└── package.json
~~~



## 进行初始化以及启动

tyarn install #安装相关依赖

tyarn start #启动服务

##菜单和路由

默认的菜单是不能直接投入到项目开发的，所以，我们需要搞清楚如何自定义菜单和路由。

在pro中，菜单和路由，在router.config.js配置文件中进行管理：

打开router.config.js后，可以看出，pro提供了有2套路由（布局），分别是/user和/