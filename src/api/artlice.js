import Axios from '@/uits/axios'
 const getArticleById = articleId =>{
    return Axios({
        method:"GET",
        url:`/app/v1_0/articles/${articleId}`
    })
}
export default{
    getArticleById
}
