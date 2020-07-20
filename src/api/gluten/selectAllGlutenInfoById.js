import { request } from '@/api/service'

export function selectAllGlutenInfoById(params) {
  return request({
    url: '/gluten_info',
    method: 'get',
    params: params
  })
}
