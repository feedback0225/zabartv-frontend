import { Layout } from '@/components/Layout/Layout';
import { Cartoons } from '@/screens/Cartoons/Cartoons';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { wrapper } from '@/store/store';
import { getIP } from '@/reducers/auth/thunks';
import { getCategory } from '@/reducers/category/thunks';
import type { NextPage } from 'next';
import axios from '@/utils/axios';

const CartoonsPage: NextPage = () => {
	return (
		<Layout>
			<Cartoons />
		</Layout>
	);
};

export const getStaticProps = wrapper.getStaticProps(({ dispatch }) => async ({ locale }) => {
	await dispatch(getIP());

	if (locale === 'che') {
		await axios.get(`/languages/index?lang=uk-UA`);
		await dispatch(getCategory(1));
	} else if (locale === 'ru') {
		await axios.get(`/languages/index?lang=ru-RU`);
		await dispatch(getCategory(1));
	}

	return {
		props: {
			...(await serverSideTranslations(locale as string)),
		},
	};
});

export default CartoonsPage;
