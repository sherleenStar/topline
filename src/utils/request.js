import axios from 'axios'
import jsonBig from 'json-bigint'

const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn'
})
request.defaults.transformResponse = [function (data) {
  return data ? jsonBig.parse(data) : {}
}]
export default request
