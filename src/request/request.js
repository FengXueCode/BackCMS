import axios from 'axios';
const Axios = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
})
function request(
  url,
  data = {},
  method = "POST",
  headers = {},
) {
  return new Promise((resolve, reject) => {
    Axios({
      url: import.meta.env.VITE_BASE_URL + url,
      method,
      data: method === "GET" ? undefined : data,
      params: method === "GET" ? data : undefined,
      headers,
    })
      .then((response) => {
        if (response.data.data === undefined) {
          resolve(response.data);
        }
        if (response.data.code === 200) {
          resolve(response.data);
        } else {
          reject(response.data);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}
export default request;
