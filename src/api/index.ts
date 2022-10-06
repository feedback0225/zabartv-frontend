import { API_KEY, API_URL, HTTPS_API_URL } from '@/constants/api';
import { getSessionId } from '@/helpers/getSessionId'
import { IGradeResponse } from '@/types/IGrade';
import { IRegisterResponse, ILoginResponse, IUpdateResponse, IUser } from '@/types/IUser';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// packages

export const getPackages = createAsyncThunk('packages/getPackages', async () => {
	const { data } = await axios.get(`${API_URL}/packages/list?session_id=${getSessionId()}&token=${API_KEY}`)

	return data;
});

//items

export const getHomeCategories = createAsyncThunk('items/getHomeCategories', async () => {
	const { data } = await axios.get(`${API_URL}/items/selectdataonhome?session_id=${getSessionId()}&token=${API_KEY}`)

	return data;
});

export const getMovieById = createAsyncThunk(
	'items/getMovieById',
	async (id: string) => {
		const { data } = await axios.get(`${API_URL}/items/selectdata?id=${id}&session_id=${getSessionId()}&token=${API_KEY}`)

		return data;
	}
);

export const getCategory = createAsyncThunk('items/getMovieById', async () => {
	const { data } = await axios.get(`${API_URL}/items/selectfullcatdata?session_id=${getSessionId()}&id=1&token=${API_KEY}`)

	return data;
});

export const gradeFilm = async ({id, rating}: IGradeResponse) => {
	try {
		await axios.get(`${API_URL}/items/rating?film_id=${id}&rating=${rating}&type=add&session_id=${getSessionId()}&token=${API_KEY}`)
	} catch (error) {
		console.error(error);
		
	}
}

// session

export const getMe = createAsyncThunk('session/getMe', async () => {

	const { data: { id } } = await axios.get(`${API_URL}/session/getid?session_id=${getSessionId()}&token=${API_KEY}`)

	const { data } = await axios.get(`${API_URL}/session/getuserdata?hash=0${getSessionId()}-posddiosdfuyu-ln-${id}-zspdaasid&session_id=${getSessionId()}&token=${API_KEY}`)

	return data;
});

export const register = async ({ name, email, password, password_confirm, ip }: IRegisterResponse) => {

	const { data } = await axios({
		url: `${HTTPS_API_URL}/session/sign-up?session_id=${getSessionId()}&token=${API_KEY}`,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		method: 'post',
		data: `username=${name}&email=${email}&password=${password}&password_confirm=${password_confirm}&ip=${ip}`,
	})

	return data
};

export const login = async ({ identity, password, rememberMe, ip }: ILoginResponse) => {
	const { data } = await axios({
		url: `${HTTPS_API_URL}/session/sign-in?session_id=${getSessionId()}&token=${API_KEY}`,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		method: 'post',
		data: `identity=${identity}&password=${password}&rememberMe=${rememberMe}&ip=${ip}`,
	})

	return data
}

export const updateUserData = async ({password, date_of_birth, email}: IUpdateResponse) => {
	const { data } = await axios({
		url: `${HTTPS_API_URL}/session/updateuserdata?session_id=${getSessionId()}&token=${API_KEY}`,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		method: 'post',
		data: `password=${password}&date_of_birth=${date_of_birth}&email=${email}`,
	})

	return data
} 

export const getIP = createAsyncThunk('session/ip', async () => {
	const { data } = await axios.get('https://api.ipify.org/?format=json')

	return data.ip;
});

export const getHistoryPayments = createAsyncThunk('session/historyPayments', async (id: number) => {
	const {data} = await axios.get(`${API_URL}/session/getuserorders?id=${id}&session_id=${getSessionId()}&token=${API_KEY}`)

	return data
})