import { API_KEY, API_URL } from '@/constants/api';
import { getSessionId } from '@/helpers/getSessionId'
import { IRegisterResponse, ILoginResponse } from '@/types/IUser';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getPackages = createAsyncThunk('subscribe/getPackages', async () => {
	const { data } = await axios.get(`${API_URL}/packages/list?session_id=${getSessionId()}&token=${API_KEY}`)

	return data;
});

export const getHomeCategories = createAsyncThunk('home/getHomeCategories', async () => {
	const { data } = await axios.get(`${API_URL}/items/selectdataonhome?session_id=${getSessionId()}&token=${API_KEY}`)

	return data;
});

export const getMovieById = createAsyncThunk(
	'movie/getMovieById',
	async (id: string) => {
		const { data } = await axios.get(`${API_URL}/items/selectdata?id=${id}&session_id=${getSessionId()}&token=${API_KEY}`)

		return data;
	}
);

export const getCategory = createAsyncThunk('category/getMovieById', async () => {
	const { data } = await axios.get(`${API_URL}/items/selectfullcatdata?session_id=${getSessionId()}&id=1&token=${API_KEY}`)

	return data;
});

export const register = createAsyncThunk(
	'auth/register',
	async ({ email, password, password_confirm, ip }: IRegisterResponse) => {
		const data = axios.post(`https://appsignals.coderman.top/api/v1/session/sign-up?session_id=${getSessionId()}&token=${API_KEY}`, {
			email,
			password,
			password_confirm,
			ip,
		})

		return data;
	}
);

export const login = createAsyncThunk(
	'auth/login',
	async ({ identity, password, rememberMe, ip }: ILoginResponse) => {
		const data = axios.post(`https://appsignals.coderman.top/api/v1/session/sign-in?session_id=${getSessionId()}&token=${API_KEY}`, {
			identity,
			password,
			rememberMe,
			ip,
		})
		
		return data;
	}
);