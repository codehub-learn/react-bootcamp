import { useState, useEffect } from "react";
import { Typography } from "antd";

const { Title } = Typography;

const UseEffect01 = () => {
  const [joke, setJoke] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setJoke(data.value);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Title>useEffect 01</Title>
      <Title level={4}>{isLoading ? "Loading..." : joke}</Title>
    </div>
  );
};

export default UseEffect01;
