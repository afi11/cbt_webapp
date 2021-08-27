import axios from "axios";
import { mainUrl } from "./url";

export const UPDATE_DATA = (path, data) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${mainUrl}${path}/${data.id}`, data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.message);
      });
  });
};
