import request from '../utils/request'

export async function login (data) {
  return request({
    url: '/user/login.json',
    method: 'post',
    data,
  })
}
