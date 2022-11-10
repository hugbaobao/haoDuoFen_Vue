import axios from "axios";

const request = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default request;
