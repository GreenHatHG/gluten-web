import { request } from '@/api/service'

export function updateTitle(data) {
  return request({
    url: '/gluten_info/title',
    method: 'put',
    data
  })
}
