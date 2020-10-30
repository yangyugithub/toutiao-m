import Axios from '@/uits/axios'

// 首页文章
export const getArticles = params => {
    return Axios({
        method: "GET",
        url: '/app/v1_1/articles',
        params
    })
}

// 获取验证码
export const getCode = params => {
    return Axios({
        method: "GET",
        url: '/app/v1_0/sms/codes/:mobile',
        headers: {
            'Content-Type': 'application/json',
        },
        params,
    })
}

// 用户登录
export const getUserInfo = params => {
    return Axios({
        method: "POST",
        url: '/app/v1_0/authorizations/',
        headers: {
            'Content-Type': 'application/json',
        },
        params
    })
}