import Mock from 'mockjs'
import articleApi from './article'

// Mock对应的请求url
Mock.mock(/\/article\/list/, 'get', articleApi.getArticleList)
Mock.mock(/\/article\/detail/, 'get', articleApi.getArticleInfo)
Mock.mock(/\/article\/create/, 'post', articleApi.addArticle)

export default Mock