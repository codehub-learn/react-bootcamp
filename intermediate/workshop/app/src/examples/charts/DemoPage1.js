import { Typography, Divider, Row, Col, Statistic, Card, Progress } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
} from "recharts";
import "./styles.css";
import { data1, data2, data3, data4 } from "./data";

const { Title } = Typography;

const DemoPage1 = () => {
  return (
    <div className="demo-container">
      <Title>Demo page 1</Title>
      <Divider />
      <Row gutter={[24, 24]}>
        <Col sm={{ span: 12 }} lg={{ span: 6 }}>
          <Card>
            <Statistic
              title="Active"
              value={11.28}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col sm={{ span: 12 }} lg={{ span: 6 }}>
          <Card>
            <Statistic
              title="Idle"
              value={9.3}
              precision={2}
              valueStyle={{ color: "#cf1322" }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col sm={{ span: 12 }} lg={{ span: 6 }}>
          <Card style={{ display: "flex", justifyContent: "center" }}>
            <Progress type="circle" percent={76} width={62} />
          </Card>
        </Col>
        <Col sm={{ span: 12 }} lg={{ span: 6 }}>
          <Card style={{ display: "flex", justifyContent: "center" }}>
            <Progress type="dashboard" percent={63} width={62} />
          </Card>
        </Col>
      </Row>
      <Row className="row" gutter={[24, 24]}>
        <Col style={{ width: "100%" }}>
          <div className="chart-container">
            <Title level={4}>My super line chart</Title>
            <div className="chart-inner">
              <ResponsiveContainer>
                <LineChart
                  data={data1}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="row" gutter={[24, 24]}>
        <Col style={{ width: "100%" }}>
          <div className="chart-container">
            <Title level={4}>My super area chart</Title>
            <div className="chart-inner">
              <ResponsiveContainer>
                <AreaChart
                  data={data2}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="uv"
                    stackId="1"
                    stroke="#8884d8"
                    fill="#8884d8"
                  />
                  <Area
                    type="monotone"
                    dataKey="pv"
                    stackId="1"
                    stroke="#82ca9d"
                    fill="#82ca9d"
                  />
                  <Area
                    type="monotone"
                    dataKey="amt"
                    stackId="1"
                    stroke="#ffc658"
                    fill="#ffc658"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="row" gutter={[24, 24]}>
        <Col sm={{ span: 24 }} lg={{ span: 12 }}>
          <div className="chart-container">
            <Title level={4}>My super bar chart</Title>
            <div className="chart-inner">
              <ResponsiveContainer>
                <BarChart
                  data={data3}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="pv" fill="#8884d8" />
                  <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Col>
        <Col sm={{ span: 24 }} lg={{ span: 12 }}>
          <div className="chart-container">
            <Title level={4}>My super pie chart</Title>
            <div className="chart-inner">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={data4}
                    dataKey="value"
                    outerRadius={100}
                    fill="#8884d8"
                    label
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DemoPage1;
