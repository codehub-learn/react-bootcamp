import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";

const { Header } = Layout;

const AppHeader = () => (
  <Header>
    <Link to="/">
      <h1>Team 00</h1>
    </Link>
    <Menu theme="dark" mode="horizontal">
      <Menu.Item>
        Models
        <Link to="/models" />
      </Menu.Item>
      <Menu.Item>
        Page 1
        <Link to="/page-1" />
      </Menu.Item>
    </Menu>
  </Header>
);

export default AppHeader;
