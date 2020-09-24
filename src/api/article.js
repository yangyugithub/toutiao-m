import Axios from '@/uits/axios'
export const getArticles = params =>{
    return Axios({
        method:"GET",
        url:'/app/v1_1/articles',
        params
    })
}