import Axios from '@/uits/axios'
export const getUserChannels = () => {
    return Axios({
        method:"GET",
        url: '/app/v1_0/user/channels'
    })
}