import { request } from '@/api/service'

export function updateValue(data) {
  return request({
    url: '/gluten_info/value',
    method: 'put',
    data
  })
}
