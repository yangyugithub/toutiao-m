import Axios from '@/uits/axios'
export const getAllchannels = () =>{
    return Axios({
        method:"GET",
        url:'/app/v1_0/channels',
    })
}