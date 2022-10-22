# Ant Design入门

umi中使用antd,直接在 config.js文件中 umi-plugin-react 插件里面添加 antd: true 就开启Ant Design功能，umi会自动按需下载并编译。



链接使用 umi中的 Link组件   import Link from "umi/link";   使用： <*Link* to="/user/userList">用户列表</*Link*>

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



官方示例：https://3x.ant.design/components/tabs-cn/

注意：由于这里使用的是umi这里使用的是jsx语法， 所以这里有一点不同 ，在官方的示例中使用了 ReactDOM.render(  xxx组件,  mountNode, );的方式来渲染页面，这里使用的是 render() {  return ( xxx组件 ); } 来渲染页面， 其他都一样的，完整示例如下：

~~~js
//路径 pages/antd/tabsDemo.js 页面访问URL: http://localhost:8000/antd/tabsDemo
import React from "react";
import { Tabs } from "antd";

//对象解构方式获取 Tabs对象中的 Tabpane对象
//const { TabPane } = Tabs;

//重命名TabPane为MyTabPane
const { TabPane: MyTabPane } = Tabs;

//直接使用.来获取 TabPane 为Tabs中的子组件
//const MyTabPane = Tabs.TabPane;

function callback(params) {
  console.log(params);
}

class TabsDemo extends React.Component {
  render() {
    return (
      <div>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <MyTabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
          </MyTabPane>
          <MyTabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </MyTabPane>
          <MyTabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </MyTabPane>
        </Tabs>
      </div>
    );
  }
}

export default TabsDemo;
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

~~~js
// layouts/index.js
import React from "react";
import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;

class BaseLayout extends React.Component {
  render() {
    return (
      <Layout>
        <Sider>Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>footer</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default BaseLayout;

~~~



接下来，配置路由：（非必须, 如果不配置，则使用默认的路径）

config.js文件：

~~~js
export default {
  plugins: [
    [
      "umi-plugin-react",
      {
        dva: true, //开启dva
        antd: true, // 开启Ant Design功能
      },
    ],
  ],
  //下面为手动配置路由，如果不配置，则使用umi官方的自动路由配置
  // routes: [
  //   {
  //     path: "/",
  //     component: "../layouts", //配置布局路由
  //   },
  // ],
};

~~~



基础布局和导航菜单，链接示例

~~~js
// layouts/BaseLayout.js
import React from "react";
import { Layout, Menu, Icon } from "antd";
import Link from "umi/link";

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

class BaseLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  render() {
    return (
      <Layout>
        <Sider width={256} style={{ minHeight: "100vh", color: "white" }}>
          <div
            style={{
              height: "32px",
              background: "rgba(255,255,255,.2)",
              margin: "16px",
            }}
          />
          <Menu
            defaultSelectedKeys={["2"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            theme="dark"
            inlineCollapsed={this.state.collapsed}
          >
           
            <Menu.Item key="1">
              <Icon type="desktop" />
              <span>Option 1</span>
            </Menu.Item>
           
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>用户管理</span>
                </span>
              }
            >
              <Menu.Item key="5">
                <Link to="/user/userList">用户列表</Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to="/user/userList">新增用户</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{ background: "#fff", textAlign: "center", padding: 0 }}
          >
            Header
          </Header>
          <Content style={{ margin: "24px 16px 0" }}>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>footer</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default BaseLayout;

~~~



注意:这里使用了umi的link标签，目的是出现记录点击的菜单。

~~~js
<Link to="/user/list">用户列表</Link>
~~~







### model,pages 调用API完整示例

- 模型 userlist.js

~~~js
//src/models/userlist.js
import request from "../util/request";
export default {
  namespace: "userlist",
  state: {
    list: [],
  },
  effects: {
    *initData(params, sagaEffects) {
      const { call, put } = sagaEffects;
      const url = "/ds/user/list";
      let data = yield call(request, url);
      yield put({
        type: "queryList",
        data: data,
      });
    },
  },
  reducers: {
    queryList(state, result) {
      let data = [...result.data];
      return {
        //更新状态值
        list: data,
      };
    },
  },
};

~~~



- 页面userList.js

~~~js
//src/pages/user/userList.js
import React from "react";
import { connect } from "dva";
import { Table, Divider, Tag, Pagination } from "antd";
const { Column } = Table;
const namespace = "userlist";
@connect(
  (state) => {
    return {
      data: state[namespace].list,
    };
  },
  (dispatch) => {
    return {
      // 将initDao函数绑定到this.props中
      initDao: () => {
        dispatch({
          //调用model中的initData函数
          type: namespace + "/initData",
        });
      },
      //这里如果有多个函数需要注入到 this.props中，可以继续写
    };
  }
)
class UserList extends React.Component {
  //在页面初始化完成时调用
  componentDidMount() {
    this.props.initDao();
  }
  render() {
    return (
      <div>
        <Table
          dataSource={this.props.data}
          pagination={{
            position: "bottom",
            total: 500,
            pageSize: 10,
            defaultCurrent: 3,
          }}
        >
          <Column title="姓名" dataIndex="name" key="name" />
          <Column title="年龄" dataIndex="age" key="age" />
          <Column title="地址" dataIndex="address" key="address" />
          <Column
            title="标签"
            dataIndex="tags"
            key="tags"
            render={(tags) => (
              <span>
                {tags.map((tag) => (
                  <Tag color="blue" key={tag}>
                    {tag}
                  </Tag>
                ))}
              </span>
            )}
          />
          <Column
            title="操作"
            key="action"
            render={(text, record) => (
              <span>
                <a href="#!">编辑</a>
                <Divider type="vertical" />
                <a href="#!">删除</a>
              </span>
            )}
          />
        </Table>
      </div>
    );
  }
}
export default UserList;

~~~

dva请求工具封装

~~~js
// src/util/request.js
require("dva").fetch;

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}
/**
 * Requests a URL, returning a promise.
 *
 * @param {string} url The URL we want to request
 * @param {object} [options] The options we want to pass to "fetch"
 * @return {object} An object containing either "data" or "err"
 */
export default async function request(url, options) {
  const response = await fetch(url, options);
  checkStatus(response);
  return await response.json();
}

~~~



项目根目录配置文件 config/config.js

~~~js
export default {
  plugins: [
    [
      "umi-plugin-react",
      {
        dva: true, //开启dva
        antd: true, // 开启Ant Design功能
      },
    ],
  ],
  //下面为手动配置路由，如果不配置，则使用umi官方的自动路由配置
  // routes: [
  //   {
  //     path: "/",
  //     component: "../layouts", //配置布局路由
  //     routes: [
  //       //在这里进行配置子页面
  //       {
  //         path: "/antd/tabsDemo",
  //         component: "./antd/tabsDemo",
  //       },
  //     ],
  //   },
  // ],
};
~~~





