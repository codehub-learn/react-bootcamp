import { useState, useEffect } from "react";
import { Typography, Divider, Row, Col, Spin } from "antd";
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
  Cell,
} from "recharts";
import { getStats } from "../api/api";

const { Title } = Typography;
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Stats = () => {
  const [statsData, setStatsData] = useState(null);

  useEffect(() => {
    getStats().then((data) => {
      setStatsData(data);
    });
  }, []);

  return (
    <div>
      <Title>Stats page</Title>
      <Divider />
      {statsData ? (
        <>
          <Row className="row" gutter={[24, 24]}>
            <Col style={{ width: "100%" }}>
              <div className="chart-container">
                <Title level={4}>My super line chart</Title>
                <div className="chart-inner">
                  <ResponsiveContainer>
                    <LineChart
                      data={statsData.lineChart}
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
                      data={statsData.areaChart}
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
                      data={statsData.barChart}
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
                        data={statsData.pieChart}
                        dataKey="value"
                        outerRadius={100}
                        label
                      >
                        {statsData.pieChart.map((entry, index) => (
                          <Cell
                            key={`cell-${entry.name}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Col>
          </Row>
        </>
      ) : (
        <div className="stats-loader">
          <Spin size="large" />
        </div>
      )}
    </div>
  );
};

export default Stats;
