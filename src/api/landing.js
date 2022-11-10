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

// get落地页
<<<<<<< HEAD
export const gettotalApi = function () {
  return request.post("/landing/gtc");
};

=======
>>>>>>> 90bfc2a (更新找到的部分)
export const getLandingApi = function (pages, limit, filterform) {
  return request.post("/landing/gtlanding", {
    currentpage: pages,
    singlepage: limit,
    condition: filterform,
  });
};

<<<<<<< HEAD
=======
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

>>>>>>> 90bfc2a (更新找到的部分)
// 分组
// 增
export const addgroupApi = function (form) {
  return request.post("/group/append", {
    forms: form,
  });
};

// 查
<<<<<<< HEAD
export const grouptotalApi = function () {
  return request.get("/group/gtc");
};

=======
>>>>>>> 90bfc2a (更新找到的部分)
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

<<<<<<< HEAD
=======
export const groupsearchApi = function (val, pages, limit) {
  return request.get("/group/gts", {
    params: {
      words: val,
      currentpage: pages,
      singlepage: limit,
    },
  });
};

>>>>>>> 90bfc2a (更新找到的部分)
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
