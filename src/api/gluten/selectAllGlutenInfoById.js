import { request } from '@/api/service'

export function selectAllGlutenInfoByIdOrCategory(params) {
  return request({
    url: '/gluten_info',
    method: 'get',
    params: params
  })
}
