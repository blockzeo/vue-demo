import axios from 'axios'
import { Loading } from 'element-ui'
import { GLOBAL_API_DOMAIN } from '../config'

let loading

function startLoading () {
  loading = Loading.service({
    lock: true,
    background: 'rgba(0, 0, 0, 0)'
  })
}

function endLoading () {
  loading.close()
}

let needLoadingRequestCount = 0

function showFullScreenLoading () {
  if (needLoadingRequestCount === 0) {
    startLoading()
  }
  needLoadingRequestCount++
}

function tryHideFullScreenLoading () {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    endLoading()
  }
}

var httpClient = axios.create({
  baseURL: GLOBAL_API_DOMAIN,
  withCredentials: true
})
// Add a request interceptor
httpClient.interceptors.request.use(async (config) => {
  !config.noLoading && showFullScreenLoading()
  // Do something before request is sent
  return config
}, async function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
httpClient.interceptors.response.use(async (response) => {
  !response.config.noLoading && tryHideFullScreenLoading()
  // Do something with response data
  let { data: { status, message } } = response
  if (status === 403 || status === 22001) {
    if (!location.pathname.startsWith('/login')) {
      window.globalRouter.push(`/login`)
    }
  }
  // else if((status == 403 || status == 22001 || status == 412) && window.location.href.includes("superadmin")) {
  //   if (!location.pathname.startsWith('/superadmin/login')) {
  //       window.globalRouter.push(`/superadmin/login`);
  //   }
  // }
  return response
}, async function (error) {
  // Do something with response error
  return Promise.reject(error)
})

export default httpClient
