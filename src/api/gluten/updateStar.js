import { request } from '@/api/service'

export function updateStar(data) {
  return request({
    url: '/gluten_info/star',
    method: 'put',
    data
  })
}
