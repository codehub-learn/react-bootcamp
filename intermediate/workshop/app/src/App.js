import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
// Demos
import SimpleInput from "./examples/forms/SimpleInput";
import InputTextarea from "./examples/forms/InputTextarea";
import SelectRadioButtonCheckbox from "./examples/forms/SelectRadioButtonCheckbox";
import FormSubmit from "./examples/forms/FormSubmit";
import AntFormSubmit from "./examples/forms/AntFormSubmit";
import UseEffect00 from "./examples/useEffect/00";
import UseEffect01 from "./examples/useEffect/01";
import UseEffect02 from "./examples/useEffect/02";
import UseEffect03 from "./examples/useEffect/03";
import DemoPage1 from "./examples/charts/DemoPage1";
import DemoPage2 from "./examples/charts/DemoPage2";

const { Content } = Layout;

const App = () => {
  return (
    <Router>
      <Layout className="layout-container">
        <Header />
        <Layout>
          <Sidebar />
          <Content className="inner-content">
            <Routes>
              <Route path="/forms/simple-input" element={<SimpleInput />} />
              <Route
                path="/forms/input-and-textarea"
                element={<InputTextarea />}
              />
              <Route
                path="/forms/select-radio-button-checkbox"
                element={<SelectRadioButtonCheckbox />}
              />
              <Route path="/forms/form-submit-async" element={<FormSubmit />} />
              <Route
                path="/forms/ant-design-form-submit"
                element={<AntFormSubmit />}
              />

              <Route path="/use-effect/00" element={<UseEffect00 />} />
              <Route path="/use-effect/01" element={<UseEffect01 />} />
              <Route path="/use-effect/02" element={<UseEffect02 />} />
              <Route path="/use-effect/03" element={<UseEffect03 />} />

              <Route path="/charts/demo-1" element={<DemoPage1 />} />
              <Route path="/charts/demo-2" element={<DemoPage2 />} />
            </Routes>
            <footer>
              Made with{" "}
              <span role="img" aria-label="love">
                ❤️
              </span>{" "}
              in Athens, Greece.
            </footer>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
