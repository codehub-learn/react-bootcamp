import { useState } from "react";
import { Typography } from "antd";

const { Title } = Typography;

const SimpleInput = () => {
  const [val, setVal] = useState("");
  const updateName = (e) => {
    setVal(e.target.value);
  };

  return (
    <div>
      <Title>Input</Title>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" value={val} onChange={updateName} />
      <h1>{val}</h1>
    </div>
  );
};

export default SimpleInput;
