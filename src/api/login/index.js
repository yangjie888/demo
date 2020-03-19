import request from '@/api/request.js'

export function loginOutApi () {
  return request({
    url: '/login',
    method: 'get'
  })
}
