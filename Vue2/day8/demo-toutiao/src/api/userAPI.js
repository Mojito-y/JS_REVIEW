import request from "../utils/request";

// 下面的接口调用仅作演示
export const getUserInfoAPI = function(){
  return request.get('/user');
}