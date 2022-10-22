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
