import { request } from '@/api/service'

export function loginWithGithub (params) {
  return request({
    url: '/oauth2/github',
    method: 'post',
    params: params
  })
}
