import axios from "axios";
import { mainUrl } from "./url";

export const DELETE_DATA = (path, id) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(mainUrl + path + `/${id}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.message);
      });
  });
};
