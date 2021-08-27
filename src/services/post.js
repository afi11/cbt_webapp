import axios from "axios";
import { mainUrl } from "./url";

export const POST_DATA = (path, data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(mainUrl + path, data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.message);
      });
  });
};
