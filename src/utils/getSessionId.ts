import { getCookie, setCookie } from 'cookies-next';

// export const getSessionId = () => {
// 	if (typeof window === 'undefined') {
// 		return 'qweqweqweqweqwe';
// 	} else {
// 		if (!window?.localStorage?.getItem('zabar_session_id')?.length) {
// 			window.localStorage.setItem('zabar_session_id', String(Date.now()));
// 		}

// 		return window.localStorage.getItem('zabar_session_id');
// 	}
// };
export const getSessionId = () => {
	//Проверяем есть ли session id
	const cookie = getCookie('session_id');
	//Если его нет создаем новый
	if (!cookie) {
		setCookie('session_id', Date.now(), { maxAge: 91000 });
		return getCookie('session_id');
	}
	return cookie;
};
