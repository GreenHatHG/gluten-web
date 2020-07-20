import { request } from '@/api/service'

export function deleteGlutenByID(data) {
  return request({
    url: '/gluten_info/id',
    method: 'delete',
    data
  })
}
