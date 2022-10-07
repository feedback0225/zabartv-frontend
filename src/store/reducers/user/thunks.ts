import { API_KEY, API_URL, HTTPS_API_URL } from "@/constants/api";
import { getSessionId } from "@/helpers/getSessionId";
import { IUpdateResponse } from "@/types/IUser";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getMe = createAsyncThunk('user/getMe', async () => {
	const {
		data: { id },
	} = await axios.get(`${API_URL}/session/getid?session_id=${getSessionId()}&token=${API_KEY}`);

	const { data } = await axios.get(
		`${API_URL}/session/getuserdata?hash=0${getSessionId()}-posddiosdfuyu-ln-${id}-zspdaasid&session_id=${getSessionId()}&token=${API_KEY}`
	);

	return data;
});

export const getHistoryPayments = createAsyncThunk('user/historyPayments', async (id: number) => {
	const { data } = await axios.get(
		`${API_URL}/session/getuserorders?id=${id}&session_id=${getSessionId()}&token=${API_KEY}`
	);

	return data;
});

export const updateUser = createAsyncThunk('auth/update', async ({ password, date_of_birth, email }: IUpdateResponse) => {
	const { data } = await axios({
		url: `${HTTPS_API_URL}/session/updateuserdata?session_id=${getSessionId()}&token=${API_KEY}`,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		method: 'post',
		data: `password=${password}&date_of_birth=${date_of_birth}&email=${email}`,
	});

	return data;
});