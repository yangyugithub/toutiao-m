import Axios from '@/uits/axios'
export const getArticleById = articleId =>{
    return Axios({
        method:"GET",
        url:`/app/v1_0/articles/${articleId}`
    })
}
