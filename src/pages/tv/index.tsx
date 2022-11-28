import { Layout } from '@/components/Layout/Layout';
import { Tv } from '@/screens/Tv/Tv';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { wrapper } from '@/store/store';
import { getIP } from '@/reducers/auth/thunks';
import { getCategory } from '@/reducers/category/thunks';
import type { NextPage } from 'next';
import axios from '@/utils/axios';

const CartoonsPage: NextPage = () => {
	return (
		<Layout>
			<Tv />
		</Layout>
	);
};

export const getStaticProps = wrapper.getStaticProps(({ dispatch }) => async ({ locale }) => {
	await dispatch(getIP());

	if (locale === 'che') {
		await axios.get(`/languages/index?lang=che_CHE`);
		await dispatch(getCategory('tv'));
	} else if (locale === 'ru') {
		await axios.get(`/languages/index?lang=ru-RU`);
		await dispatch(getCategory('tv'));
	}

	return {
		props: {
			...(await serverSideTranslations(locale as string)),
		},
		revalidate: 1,
	};
});

export default CartoonsPage;
