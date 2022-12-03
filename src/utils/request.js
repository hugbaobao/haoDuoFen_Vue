import axios from "axios";

const request = axios.create({
  baseURL: "http://api.antairui.net",
  // baseURL: "http://127.0.0.1:8000",
});

// 添加请求拦截器
request.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    const Token = sessionStorage.getItem("Token");
    if (Token) {
      config.headers.Authorization = Token;
    }

    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
request.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    // 对响应错误做点什么
    // 完成之后解除下面这条注释
    // sessionStorage.clear();
    return Promise.reject(error);
  }
);

export default request;
