import { request } from '@/api/service'

export function countGlutenInfo(params) {
  return request({
    url: '/gluten_info/count',
    method: 'get',
    params:params
  })
}
