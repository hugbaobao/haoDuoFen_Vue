import request from "@/utils/request";

// get转化微信号统计
export const getwxApi = function (pages, limit, filterform) {
  return request.post("/weixin/getwx", {
    currentpage: pages,
    singlepage: limit,
    condition: filterform,
  });
};

//微信号管理
export const cotrWxApi = function (pages, limit, filterform) {
  return request.post("/weixin/ctwx", {
    currentpage: pages,
    singlepage: limit,
    condition: filterform,
  });
};

// 分组
// 增
export const appendwxgroupApi = function (form) {
  return request.post("/wxgroup/append", {
    data: form,
  });
};

// 删
export const delgroupApi = function (id) {
  return request.get("/wxgroup/del", {
    params: {
      id: id,
    },
  });
};

// 改
export const updatewxgroupApi = function (form) {
  return request.post("/wxgroup/update", {
    forms: form,
  });
};

// 查
export const getwxgroupApi = function (pages, limit, filterform) {
  return request.get("/wxgroup/gtg", {
    params: {
      currentpage: pages,
      singlepage: limit,
      condition: filterform,
    },
  });
};

// 获取完整列表
export const getgrouplistApi = function () {
  return request.get("/wxgroup/ggl");
};
