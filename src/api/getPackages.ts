import {API_KEY, API_URL} from '@/constants/api';
import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getPackages = createAsyncThunk(
    'subscribe/packages',
    async () => {
        const {data} = await axios({
            url: `${API_URL}/packages/list?session_id=qweqwe&token=${API_KEY}`,
            method: 'get',
        })
        return data
    }
)