import axios from "axios";
import { API_URL, FULLSTACK, NoFullStackMessage } from "./config";
import houses from "../seed/available/housing.json";

export const getHouseById = async (id) => {
  if (FULLSTACK) {
    const response = await axios.get(`${API_URL}/housing/${id}`);
    return response.data;
  }
  return houses.find((h) => h.id == id);
};

export const getHouses = async () => {
  if (FULLSTACK) {
    const response = await axios.get(API_URL + "/housing/");
    return response.data;
  }
  return houses;
};

export const getRecentHouses = async () => {
  if (FULLSTACK) {
    const res = await axios.get(API_URL + "/housing/");
    const l = res.data.length;
    return [res.data[l - 1], res.data[l - 2], res.data[l - 3], res.data[l - 4]];
  }
  const l = houses.length;
  return [houses[l - 1], houses[l - 2], houses[l - 3], houses[l - 4]];
};

export const createHouse = async (houseData) => {
  if (FULLSTACK) {
    const response = await axios.post(API_URL + "/housing/add", houseData);
    return response.data;
  }
  alert(NoFullStackMessage);
};
export const createManyHouses = async (housesData) => {
  if (FULLSTACK) {
    const response = await axios.post(
      API_URL + "/housing/add-many",
      housesData
    );
    return response.data;
  }
  alert(NoFullStackMessage);
};

export const updateHouse = async (houseData) => {
  if (FULLSTACK) {
    const response = await axios.put(
      API_URL + "/housing/" + houseData.id,
      houseData
    );
    return response.data;
  }
  alert(NoFullStackMessage);
};

export const uploadImages = (files) => {
  const formData = new FormData();

  formData.append("file1", files[0]);
  formData.append("file2", files[1]);
  formData.append("file3", files[2]);

  axios
    .post(API_URL + "/housing/upload-images", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};
