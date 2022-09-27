import { API_KEY, API_URL } from '@/constants/api';
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