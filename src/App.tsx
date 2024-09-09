import { Button, Layout } from "antd";
import { useState } from "react";
import SiderBar from "./components/siderBar/sidebar";
import "./App.css";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import CustomHeader from "./components/header/sidebar";

const { Sider, Header, Content } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <Layout>
      <Sider
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="sider"
      >
        <SiderBar />
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          className="trigger-btn"
          onClick={() => setCollapsed(!collapsed)}
        ></Button>
      </Sider>
      <Layout>
        <Header className="header">
          <CustomHeader />
        </Header>
        <Content className="content"></Content>
      </Layout>
    </Layout>
  );
};

export default App;
