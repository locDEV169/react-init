import { Flex, Menu } from "antd";
import { FaLeaf } from "react-icons/fa6";
import {
  UserOutlined,
  ProfileOutlined,
  LoginOutlined,
  OrderedListOutlined,
  CarryOutOutlined,
  SettingOutlined
} from "@ant-design/icons";

const SiderBar = () => {
  const itemMenu: any = [
    { key: "1", icon: <UserOutlined />, label: "Dashbroad" },
    { key: "2", icon: <ProfileOutlined />, label: "Profile" },
    { key: "3", icon: <OrderedListOutlined />, label: "To Do" },
    { key: "4", icon: <CarryOutOutlined />, label: "My Order" },
    { key: "5", icon: <SettingOutlined />, label: "Setting" },
    { key: "6", icon: <LoginOutlined />, label: "Logout" },
  ];

  return (
    <>
      <Flex align="center" justify="center">
        <div className="logo">
          <FaLeaf />
        </div>
      </Flex>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        className="menu-bar"
        items={itemMenu}
      />
    </>
  );
};
export default SiderBar;
