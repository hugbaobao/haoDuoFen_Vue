import request from "@/utils/request";

// add落地页
export const insertApi = function (newdata) {
  return request.post("/landing/append", {
    data: newdata,
  });
};

// 删
export const delsingleApi = function (val) {
  return request.get("/landing/del", {
    params: {
      id: val,
    },
  });
};

export const dellotApi = function (val) {
  return request.get("/landing/dellot", {
    params: {
      arr: val,
    },
  });
};

// 改
export const updatelandingApi = function (form) {
  return request.post("/landing/update", {
    data: form,
  });
};

//改微信绑定信息
export const changeweixinApi = function (form) {
  return request.post("/landing/cgwx", {
    data: form,
  });
};

// get落地页
export const getLandingApi = function (pages, limit, filterform) {
  return request.post("/landing/gtlanding", {
    currentpage: pages,
    singlepage: limit,
    condition: filterform,
  });
};

export const landingallApi = function () {
  return request.post("/landing/gtl");
};

// 切换状态
export const tglandingApi = function (ids, ables) {
  return request.post("/landing/tgl", {
    id: ids,
    enable: ables,
  });
};

// 获取带微信分组附表
export const LandingWithGroupApi = function (pages, limit, filterform) {
  return request.post("/landing/lwg", {
    currentpage: pages,
    singlepage: limit,
    condition: filterform,
  });
};

//解绑微信
export const UnbindingApi = function (ids) {
  return request.get("/landing/ubd", {
    params: {
      id: ids,
    },
  });
};

// 分组
// 增
export const addgroupApi = function (form) {
  return request.post("/group/append", {
    forms: form,
  });
};

// 查
export const getgroupApi = function (pages, limit) {
  return request.get("/group/gtgroup", {
    params: {
      currentpage: pages,
      singlepage: limit,
    },
  });
};

export const groupallApi = function () {
  return request.get("/group/gta");
};

export const groupsearchApi = function (val, pages, limit) {
  return request.get("/group/gts", {
    params: {
      words: val,
      currentpage: pages,
      singlepage: limit,
    },
  });
};

// 改
export const updategroupApi = function (form) {
  return request.post("/group/update", {
    forms: form,
  });
};

// 删
export const groupdelApi = function (id) {
  return request.get("/group/del", {
    params: {
      id: id,
    },
  });
};
