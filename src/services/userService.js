import axios from "axios";
import API_URL from "./config";

export const getUsers = async () => {
  const response = await axios.get(API_URL + "/users");
  return response.data;
};

export const createUser = async (userData) => {
  const response = await axios.post(API_URL + "/users", userData);
  return response.data;
};

export const updateUser = async (userData) => {
  const response = await axios.put(API_URL + "/users", userData);
  return response.data;
};
