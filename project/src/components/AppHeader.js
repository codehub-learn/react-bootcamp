import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";

const { Header } = Layout;

const AppHeader = () => {
  const { pathname } = useLocation();
  const selectedkey = pathname.replace(/\//g, "");

  return (
    <Header>
      <Link to="/">
        <h1>Team 00</h1>
      </Link>
      <Menu theme="dark" mode="horizontal" selectedKeys={selectedkey}>
        <Menu.Item key="models">
          Models
          <Link to="/models" />
        </Menu.Item>
        <Menu.Item key="page-1">
          Page 1
          <Link to="/page-1" />
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default AppHeader;
