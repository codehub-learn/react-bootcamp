import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import TeamMembers from "./components/TeamMembers";
import Models from "./components/Models";
import Stats from "./components/Stats";

const { Content } = Layout;

const App = () => (
  <Router>
    <Layout className="layout">
      <AppHeader />
      <Content className="main-container">
        <div className="content">
          <Switch>
            <Route exact path="/models">
              <Models />
            </Route>
            <Route exact path="/stats">
              <Stats />
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
