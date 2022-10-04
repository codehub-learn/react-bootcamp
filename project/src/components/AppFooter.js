import { Layout } from "antd";

const { Footer } = Layout;

const AppFooter = () => (
  <Footer className="align-center">
    Made with{" "}
    <span role="img" aria-label="love">
      ❤️
    </span>{" "}
    in Greece.
  </Footer>
);

export default AppFooter;
