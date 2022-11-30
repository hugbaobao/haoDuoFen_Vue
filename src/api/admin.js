import request from "@/utils/request";

// 注册
export const RegisterApi = function (form) {
  return request.post("/admin/rgs", {
    form,
  });
};

//改密
export const ChangePassApi = function (form) {
  return request.post("/admin/reset", {
    form,
  });
};

// 登录
export const LoginApi = function (form) {
  return request.post("/admin/login", {
    form,
  });
};

// 获取
export const getUSerApi = function (uid) {
  return request.get("/admin/user", {
    params: {
      id: uid,
    },
  });
};
