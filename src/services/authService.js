import api from "./api";

export const signUp = async (credentials) => {
  const response = await api.post("/users");
  return response.data;
};
