import React, { useState, useEffect } from "react";
import { Typography, Col, Card, Spin } from "antd";
import {
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
} from "recharts";
import { getPieChartData } from "./api";

const { Title } = Typography;

const PieChart = () => {
  const [pieChartData, setPieChartData] = useState([]);

  useEffect(() => {
    getPieChartData().then((data) => {
      setPieChartData(data);
    });
  }, []);

  return (
    <Col sm={{ span: 24 }} lg={{ span: 12 }}>
      {pieChartData.length ? (
        <div className="chart-container">
          <Title level={4}>My super pie chart</Title>
          <div className="chart-inner">
            <ResponsiveContainer>
              <RechartsPieChart>
                <Pie
                  data={pieChartData}
                  dataKey="value"
                  outerRadius={100}
                  fill="#8884d8"
                  label
                />
              </RechartsPieChart>
            </ResponsiveContainer>
          </div>
        </div>
      ) : (
        <Card style={{ display: "flex", justifyContent: "center" }}>
          <Spin size="large" />
        </Card>
      )}
    </Col>
  );
};

export default PieChart;
