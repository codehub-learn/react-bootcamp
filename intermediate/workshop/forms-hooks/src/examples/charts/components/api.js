export const getStats = async () => {
  const res = await fetch("https://api.npoint.io/81566954678d8e4b613a");
  const data = await res.json();

  return data;
};

export const getLineChartData = async () => {
  const res = await fetch("https://api.npoint.io/15bd07b0bae10a386799");
  const data = await res.json();

  return data;
};

export const getAreaChartData = async () => {
  const res = await fetch("https://api.npoint.io/8fa9d0348fa924998bc0");
  const data = await res.json();

  return data;
};

export const getBarChartData = async () => {
  const res = await fetch("https://api.npoint.io/0a881b3c1fecffae45ad");
  const data = await res.json();

  return data;
};

export const getPieChartData = async () => {
  const res = await fetch("https://api.npoint.io/4c4c0fa1ca1138ba315b");
  const data = await res.json();

  return data;
};
