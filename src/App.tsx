import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Layout } from "antd";
import { useState } from "react";
import "./App.css";
import CustomHeader from "./components/header/sidebar";
import SiderBar from "./components/siderBar/sidebar";

const { Sider, Header, Content } = Layout;
const themeConfig = {
  token: {
    // Seed Token
    colorPrimary: "#4f6f52",
    borderRadius: 2,

    // Alias Token
    colorBgContainer: "#f6ffed",
  },
  components: {
    Input: {
      borderRadius: 10,
      colorInfoBorderHover: "#4f6f52",
    },
    Button: {
      colorPrimary: "#4f6f52",
      algorithm: true, // Enable algorithm
    },
  },
};

const App = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  return (
    <ConfigProvider
      componentSize={"middle"}
      theme={themeConfig}
    >
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
    </ConfigProvider>
  );
};

export default App;
