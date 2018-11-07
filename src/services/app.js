import request from '../utils/request'


export async function login (params) {
  return request({
    url: '/user/login.json',
    method: 'post',
    data: params,
  })
}

export async function logout (params) {
  return request({
    url: '/user/logout.json',
    method: 'post',
    data: params,
  })
}

export function query(params) {
    return request({
        url: '/user.json',
        method: 'post',
        data: params,
    })
}