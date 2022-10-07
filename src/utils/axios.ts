import { API_KEY, API_URL } from '@/constants/api'
import { getSessionId } from './getSessionId'
import axiosStatic from 'axios'

const axios = axiosStatic.create({
    baseURL: API_URL,
    params: {
        session_id: getSessionId(),
        token: API_KEY
    }
})

export default axios;