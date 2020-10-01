import axios from "axios";

export const makeModelsPost = async (postData) => {
  const res = await axios.post("/models", postData);
  const data = await res.data;

  return data;
};
