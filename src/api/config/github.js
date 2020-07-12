import { request } from '@/api/service'

export function getGithubConfig () {
  return request({
    url: '/config/github',
    method: 'get'
  })
}
