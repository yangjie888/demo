import request from '@/api/request.js'
// 登录接口
export function loginOutApi () {
  return request({
    url: '/login',
    method: 'get'
  })
}
