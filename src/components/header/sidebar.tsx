import {
  MessageOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./style.css";
import { Avatar, Flex, Typography } from "antd";
import Search from "antd/es/input/Search";

const { Title } = Typography;
const CustomHeader = () => {
  return (
    <Flex  align="center" justify="space-between">
      <Title level={3} type="secondary">
        Welcome
      </Title>

      <Flex align="center" gap="3rem">
        <Search placeholder="Search Dashbroad" allowClear />
        <Flex align="center" gap="3rem">
          <MessageOutlined className="header-icon"/>
          <NotificationOutlined className="header-icon"/>
          <Avatar icon={<UserOutlined />} />
        </Flex>
      </Flex>
    </Flex>
  );
};
export default CustomHeader;
