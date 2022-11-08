import { Layout } from '@/components/Layout/Layout';
import { Subscribe } from '@/screens/Subscribe/Subscribe';
import { wrapper } from '@/store/store';
import { getIP } from '@/reducers/auth/thunks';
import { getPackages } from '@/reducers/packages/thunks';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { NextPage } from 'next';
import axios from '@/utils/axios';

const SubscribePage: NextPage = () => {
	return (
		<Layout>
			<Subscribe />
		</Layout>
	);
};

export const getStaticProps = wrapper.getStaticProps(({ dispatch }) => async ({ locale }) => {
	await dispatch(getIP());
	await dispatch(getPackages());

	/* if (locale === 'che') {
		await axios.get(`/languages/index?lang=uk-UA`);
		await dispatch(getPackages());
	} else if (locale === 'ru') {
		await axios.get(`/languages/index?lang=ru-RU`);
		await dispatch(getPackages());
	} */

	return {
		props: {
			...(await serverSideTranslations(locale as string)),
		},
		revalidate: 1,
	};
});

export default SubscribePage;
