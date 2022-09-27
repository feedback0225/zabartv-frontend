import { API_KEY, API_URL } from '@/constants/api';
import { IRegisterResponse, ILoginResponse } from '@/types/IUser';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getPackages = createAsyncThunk('subscribe/getPackages', async () => {
	const { data } = await axios({
		url: `${API_URL}/packages/list?session_id=qweqwe&token=${API_KEY}`,
		method: 'get',
	});
	return data;
});

export const getHomeCategories = createAsyncThunk('home/getHomeCategories', async () => {
	const { data } = await axios({
		url: `${API_URL}/items/selectdataonhome?session_id=qweqwe&token=${API_KEY}`,
		method: 'get',
	});
	return data;
});

export const getMovieById = createAsyncThunk('movie/getMovieById', async (id: string | string[] | undefined) => {
	const { data } = await axios({
		url: `${API_URL}/items/selectdata?id=${id}&session_id=qweqwe&token=${API_KEY}`,
		method: 'get',
	});
	return data;
});

export const getCategory = createAsyncThunk('category/getMovieById', async () => {
	const { data } = await axios({
		url: `${API_URL}/items/selectfullcatdata?session_id=qweqwe&token=${API_KEY}`,
		method: 'get',
	});
	return data;
});

export const register = createAsyncThunk('auth/register', async ({email, password, password_confirm, ip}: IRegisterResponse) => {
	const data = await axios({
		url: `${API_URL}/session/sign-up?session_id=qweqwe&token=${API_KEY}`,
		method: 'post',
		data: {
			email,
			password,
			password_confirm,
			ip
		}
	});
	return data;
})

export const login = createAsyncThunk('auth/login', async ({identity, password, rememberMe, ip}: ILoginResponse) => {
	const data = await axios({
		url: `${API_URL}/session/sign-in?session_id=qweqwe&token=${API_KEY}`,
		method: 'post',
		data: {
			identity,
			password,
			rememberMe,
			ip
		}
	});
	return data;
})