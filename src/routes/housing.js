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
  const response = await axios.post(API_URL + "/housing/add", houseData);
  return response.data;
};
export const createManyHouses = async (housesData) => {
  const response = await axios.post(API_URL + "/housing/add-many", housesData);
  return response.data;
};

export const updateHouse = async (houseData) => {
  const response = await axios.put(
    API_URL + "/housing/" + houseData.id,
    houseData
  );
  return response.data;
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
