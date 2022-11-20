import request from "@/utils/request";

// get统计详情
export const getmonitorApi = function (pages, limit, filterform) {
  return request.post("/monitor/gtmonitor", {
    currentpage: pages,
    singlepage: limit,
    condition: filterform,
  });
};

// 统计链接首页渲染
export const monitorhomeApi = function () {
  return request.get("/monitor/mthome");
};

// 增
export const appendcvslinkApi = function (form) {
  return request.post("/cvslink/append", {
    data: form,
  });
};

// 删
export const deletecvslinkApi = function (val) {
  return request.get("/cvslink/del", {
    params: val,
  });
};

// 改
export const updatecvslinkApi = function (form) {
  return request.post("/cvslink/update", {
    data: form,
  });
};
export const cvssecondApi = function (form) {
  return request.post("/cvslink/min", {
    data: form,
  });
};

// get统计链接
export const getcvslinkApi = function (pages, limit, filterform) {
  return request.post("/cvslink/gbl", {
    currentpage: pages,
    singlepage: limit,
    condition: filterform,
  });
};

// 获取转化率
export const getcvsrateApi = function (pages, limit, filterform) {
  return request.post("/cvslink/gtr", {
    currentpage: pages,
    singlepage: limit,
    condition: filterform,
  });
};
