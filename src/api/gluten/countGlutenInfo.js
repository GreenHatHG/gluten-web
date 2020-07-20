import { request } from '@/api/service'

export function countGlutenInfo() {
  return request({
    url: '/gluten_info/count',
    method: 'get',
  })
}
