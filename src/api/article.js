import axios from 'axios'

export default {
    getArticleInfo: (param) => {
        return axios.get('/article/detail', { params: param });
    },
    getArticleList: () => {
        return axios.get('/article/list');
    },
    addArticle: (param) => {
        return axios.post("/article/create", param);
    }
}