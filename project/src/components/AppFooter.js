import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const AppFooter = () => (
  <Footer className="align-center">
    Made with{" "}
    <span role="img" aria-label="love">
      ❤️
    </span>{" "}
    in Athens, Greece.
  </Footer>
);

export default AppFooter;
