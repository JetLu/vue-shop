import Mock from 'mockjs'
import util from '../util/util'

// 默认初始化数据
const List = []
const count = 10
for (let i = 0; i < count; i++) {
    List.push(Mock.mock({
        id: '@increment',
        author: '@first',
        title: '@title(1)',
        display_time: '@datetime',
        timestamp: +Mock.Random.date('T')
    }))
}

export default {
    getArticleList: () => {
        return List;
    },
    getArticleInfo: (data) => {
        var param = util.param2Obj(data.url)
        return List.find(article => {
            return article.id = +param.id;
        })
    },
    addArticle: (data) => {
        var articleObj = JSON.parse(data.body);
        List.push(Mock.mock({
            id: '@increment',
            author: articleObj.author + '@increment',
            title: articleObj.title + '@increment',
            display_time: '@datetime',
            timestamp: +Mock.Random.date('T')
        }))
        return List;
    }
}