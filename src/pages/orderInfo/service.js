import request from '@/utils/request'
import baseUrl from '@/utils/testEnv'
export async function queryRule(params) {
  return request(`${baseUrl}/api/rule`, {
    params,
  })
}

export async function removeRule(params) {
  return request(`${baseUrl}/api/rule`, {
    method: 'POST',
    data: { ...params, method: 'delete' },
  })
}
export async function addRule(params) {
  return request(`${baseUrl}/api/rule`, {
    method: 'POST',
    data: { ...params, method: 'post' },
  })
}
export async function updateRule(params) {
  return request(`${baseUrl}/api/rule`, {
    method: 'POST',
    data: { ...params, method: 'update' },
  })
}
