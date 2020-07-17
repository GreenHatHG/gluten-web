import { request } from '@/api/service'

export function addGluten(data) {
  return request({
    url: '/gluten_info/actions/add',
    method: 'post',
    data
  })
}
