import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout, Typography } from "antd";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import TeamMembers from "./components/TeamMembers";

const { Title } = Typography;
const { Content } = Layout;

const App = () => (
  <Router>
    <Layout className="layout">
      <AppHeader />
      <Content className="main-container">
        <div className="content">
          <Switch>
            <Route exact path="/models">
              <Title>Models page</Title>
            </Route>
            <Route exact path="/page-1">
              <Title>Page 1</Title>
            </Route>
            <Route path="/">
              <TeamMembers />
            </Route>
          </Switch>
        </div>
      </Content>
      <AppFooter />
    </Layout>
  </Router>
);

export default App;
