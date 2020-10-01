import axios from "axios";

export const makeModelsPost = async (postData) => {
  const res = await axios.post("/models", postData);
  const data = await res.data;

  return data;
};

export const getStats = async () => {
  const res = await axios("https://api.npoint.io/6bf081bc157c1d05e44a");
  const data = await res.data;

  return data;
};
