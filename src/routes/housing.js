import axios from "axios";
import API_URL from "./config";

export const getHouseById = async (id) => {
  const response = await axios.get(`${API_URL}/housing/${id}`);
  return response.data;
};

export const getHouses = async () => {
  const response = await axios.get(API_URL + "/housing/");
  return response.data;
};

export const getRecentHouses = async () => {
  const res = await axios.get(API_URL + "/housing/");
  const l = res.data.length;
  return [res.data[l - 1], res.data[l - 2], res.data[l - 3], res.data[l - 4]];
};

export const createHouse = async (houseData) => {
  const response = await axios.post(API_URL + "/housing/", houseData);
  return response.data;
};
export const createManyHouses = async (housesData) => {
  const response = await axios.post(API_URL + "/housing/add-many", housesData);
  return response.data;
};

export const updateHouse = async (houseData) => {
  const response = await axios.put(API_URL + "/housing/", houseData);
  return response.data;
};
