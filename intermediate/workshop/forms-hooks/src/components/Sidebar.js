import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { DeploymentUnitOutlined } from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu, Item } = Menu;

const Sidebar = () => (
  <Sider width={200}>
    <Menu mode="inline" style={{ height: "100%" }}>
      <SubMenu icon={<DeploymentUnitOutlined />} title="Forms and events">
        <Item>
          Input <Link to="/forms/simple-input" />
        </Item>
        <Item>
          Input and textarea <Link to="/forms/input-and-textarea" />
        </Item>
        <Item>
          Select, radio button and checkbox{" "}
          <Link to="/forms/select-radio-button-checkbox" />
        </Item>
        <Item>
          Form submit (async)
          <Link to="/forms/form-submit-async" />
        </Item>
        <Item>
          Ant Design form submit
          <Link to="/forms/ant-design-form-submit" />
        </Item>
      </SubMenu>
      <SubMenu icon={<DeploymentUnitOutlined />} title="Hooks">
        <Item>
          example 00 <Link to="/use-effect/00" />
        </Item>
        <Item>
          example 01 <Link to="/use-effect/01" />
        </Item>
        <Item>
          example 02 <Link to="/use-effect/02" />
        </Item>
        <Item>
          example 03 <Link to="/use-effect/03" />
        </Item>
      </SubMenu>
      <SubMenu icon={<DeploymentUnitOutlined />} title="Charts">
        <Item>
          Demo page 1 <Link to="/charts/demo-1" />
        </Item>
        <Item>
          Demo page 2 (async) <Link to="/charts/demo-2" />
        </Item>
      </SubMenu>
    </Menu>
  </Sider>
);

export default Sidebar;
