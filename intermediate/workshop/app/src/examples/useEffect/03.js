import React, { useState, useEffect } from "react";
import { Typography, Statistic, Row, Col } from "antd";
const { Title } = Typography;

const UseEffectDemo3 = () => {
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // console.log(e);
      const { clientX, clientY } = e;
      console.log(clientX, clientY);
      setX(clientX);
      setY(clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // return () => {
    //   window.removeEventListener("mousemove", handleMouseMove, false);
    // };
  }, []);

  return (
    <div>
      <Title>example 03</Title>
      <Row gutter={16}>
        <Col span={12}>
          <Statistic title="Mouse X" value={x} />
        </Col>
        <Col span={12}>
          <Statistic title="Mouse Y" value={y} />
        </Col>
      </Row>
    </div>
  );
};

export default UseEffectDemo3;
