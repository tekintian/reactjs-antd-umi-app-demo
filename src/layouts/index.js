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
