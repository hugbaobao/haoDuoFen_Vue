import request from "@/utils/request";

export const deleteApi = function (which) {
  return request.get("/modeltest/delone", {
    params: {
      id: which,
    },
  });
};
