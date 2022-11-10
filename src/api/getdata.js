import request from "@/utils/request";

export const getcountApi = function () {
  return request.get("/modeltest/getcount");
};
export const getpageApi = function (current, single) {
  return request.get("/modeltest/getpage", {
    params: {
      currentpage: current,
      singlepage: single,
    },
  });
};
