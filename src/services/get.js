import axios from "axios";
import { mainUrl } from "./url";

export const GET_DATA = (path) => {
  return new Promise((resolve, reject) => {
    axios
      .get(mainUrl + path)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.message);
      });
  });
};

export const GET_DET_DATA = (path, id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${mainUrl}${path}/${id}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.message);
      });
  });
};
