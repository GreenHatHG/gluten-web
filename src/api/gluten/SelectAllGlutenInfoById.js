import { request } from '@/api/service'

export function selectAllGlutenInfoById() {
  return request({
    url: '/gluten_info',
    method: 'get',
  })
}
