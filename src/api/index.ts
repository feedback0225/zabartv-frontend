import axios from '@/utils/axios';
import { getLocale } from '@/utils/getLocale';

class BaseApi {
	async setLang(locale: string) {
		const newLocale = getLocale(locale);

		await axios.get(`/languages/index?lang=${newLocale}`);
	}
}

export const baseApi = new BaseApi();
