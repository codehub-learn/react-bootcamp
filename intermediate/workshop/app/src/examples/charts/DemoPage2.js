import { Typography, Divider, Row, Col } from "antd";
import Stats from "./components/Stats";
import LineChart from "./components/LineChart";
import AreaChart from "./components/AreaChart";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import "./styles.css";

const { Title } = Typography;

const DemoPage1 = () => {
  return (
    <div className="demo-container">
      <Title>Demo page 2 (async)</Title>
      <Divider />
      <Stats />
      <LineChart />
      <AreaChart />
      <Row className="row" gutter={[24, 24]}>
        <BarChart />
        <PieChart />
        <Col sm={{ span: 24 }} lg={{ span: 12 }}></Col>
      </Row>
    </div>
  );
};

export default DemoPage1;
