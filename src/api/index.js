import httpClient from '../util/httpClient'

async function request (params) {
  const url = params._url
  delete params._url
  const method = params._method || 'post'
  delete params._method
  const message = params._message
  delete params._method
  let data = {}
  if (method === 'post') {
    data = await httpClient.post(url, params)
  } else {
    data = await httpClient.get(url, { params })
  }
  console.log(message)
  return data
}

export {
  request
}
