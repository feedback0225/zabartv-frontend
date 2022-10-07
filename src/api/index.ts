import { API_KEY, API_URL, HTTPS_API_URL } from '@/constants/api';
import { getSessionId } from '@/helpers/getSessionId';
import { IGradeResponse } from '@/types/IGrade';
import { IRegisterResponse, ILoginResponse } from '@/types/IUser';
import axios from 'axios';

export const gradeFilm = async ({ id, rating }: IGradeResponse) => {
	try {
		await axios.get(
			`${API_URL}/items/rating?film_id=${id}&rating=${rating}&type=add&session_id=${getSessionId()}&token=${API_KEY}`
		);
	} catch (error) {
		console.error(error);
	}
};

export const register = async ({ name, email, password, password_confirm, ip }: IRegisterResponse) => {
	try {
		const { data } = await axios({
			url: `${HTTPS_API_URL}/session/sign-up?session_id=${getSessionId()}&token=${API_KEY}`,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			method: 'post',
			data: `username=${name}&email=${email}&password=${password}&password_confirm=${password_confirm}&ip=${ip}`,
		});
	
		return data;
	} catch (error) {
		console.error(error);
	}
};

export const login = async ({ identity, password, rememberMe, ip }: ILoginResponse) => {
	try {
		const { data } = await axios({
			url: `${HTTPS_API_URL}/session/sign-in?session_id=${getSessionId()}&token=${API_KEY}`,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			method: 'post',
			data: `identity=${identity}&password=${password}&rememberMe=${rememberMe}&ip=${ip}`,
		});
	
		return data;		
	} catch (error) {
		console.error(error);
	}
};