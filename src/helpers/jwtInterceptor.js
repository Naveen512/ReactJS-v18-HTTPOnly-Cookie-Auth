import axios from "axios";

const jwtInterceptor = axios.create({});



jwtInterceptor.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.status === 401) {
      await axios
        .get("http://localhost:4000/refresh-token", {
          withCredentials: true,
        })
        .catch((err) => {
          return Promise.reject(err);
        });
      console.log(error.config);
      return axios(error.config);
    } else {
      return Promise.reject(error);
    }
  }
);

export default jwtInterceptor;
