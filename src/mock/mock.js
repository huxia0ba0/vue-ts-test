import Mock from 'mockjs'

const baseUrl = 'www.ceshi.come'
const loginRes = {
   'code': 200,
   'data': 'ok',
   'msg': 'success'
}
Mock.mock(`${baseUrl}/api/login`, loginRes)