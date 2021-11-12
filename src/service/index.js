import http from '@http';

// 全局
export const globalApi = {
  // 获取用户
  getUserInfo: params => http.get(`/api/v1/getUserInfo`, params),
  // 登陆
  login: params => http.post(`/api/v1/login`, params),
};
