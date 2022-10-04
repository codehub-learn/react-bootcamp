import { createRoot } from "react-dom/client";
import App from "./App";
import "antd/dist/antd.min.css";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
