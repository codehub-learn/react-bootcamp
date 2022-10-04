import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
          <Routes>
            <Route path="/models" element={<Models />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/" element={<TeamMembers />} />
          </Routes>
        </div>
      </Content>
      <AppFooter />
    </Layout>
  </Router>
);

export default App;
