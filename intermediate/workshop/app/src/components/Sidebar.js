import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { DeploymentUnitOutlined } from "@ant-design/icons";

const { Sider } = Layout;

const menuItems = [
  {
    key: "sub1",
    label: "Forms and events",
    icon: <DeploymentUnitOutlined />,
    children: [
      {
        key: "/forms/simple-input",
        label: <Link to="/forms/simple-input">Input</Link>,
      },
      {
        key: "/forms/input-and-textarea",
        label: <Link to="/forms/input-and-textarea">Input and textarea</Link>,
      },
      {
        key: "/forms/select-radio-button-checkbox",
        label: (
          <Link to="/forms/select-radio-button-checkbox">
            Select, radio button and checkbox
          </Link>
        ),
      },
      {
        key: "/forms/form-submit-async",
        label: <Link to="/forms/form-submit-async">Form submit (async)</Link>,
      },
      {
        key: "/forms/ant-design-form-submit",
        label: (
          <Link to="/forms/ant-design-form-submit">Ant Design form submit</Link>
        ),
      },
    ],
  },
  {
    key: "sub2",
    label: "Hooks",
    icon: <DeploymentUnitOutlined />,
    children: [
      {
        key: "/use-effect/00",
        label: <Link to="/use-effect/00">example 00</Link>,
      },
      {
        key: "/use-effect/01",
        label: <Link to="/use-effect/01">example 01</Link>,
      },
      {
        key: "/use-effect/02",
        label: <Link to="/use-effect/02">example 02</Link>,
      },
      {
        key: "/use-effect/03",
        label: <Link to="/use-effect/03">example 03</Link>,
      },
    ],
  },

  {
    key: "sub3",
    label: "Charts",
    icon: <DeploymentUnitOutlined />,
    children: [
      {
        key: "/charts/demo-1",
        label: <Link to="/charts/demo-1">Demo page 1</Link>,
      },
      {
        key: "/charts/demo-2",
        label: <Link to="/charts/demo-2">Demo page 2 (async)</Link>,
      },
    ],
  },
];

const Sidebar = () => (
  <Sider width={200}>
    <Menu
      theme="dark"
      mode="inline"
      tyle={{ height: "100%" }}
      items={menuItems}
    />
  </Sider>
);

export default Sidebar;
