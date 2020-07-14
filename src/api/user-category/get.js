import { request } from '@/api/service'

export function getUserCategory() {
  return request({
    url: '/user_category/actions/get',
    method: 'get',
  })
}
