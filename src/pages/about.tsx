import { Layout } from '@/components/Layout/Layout';
import { About } from '@/screens/About/About';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { NextPage } from 'next';
import { wrapper } from '@/store/store';
import { getIP } from '@/reducers/auth/thunks';
import axios from '@/utils/axios';
import Head from 'next/head';
import { getPage } from '@/reducers/page/thunks';

const AboutPage: NextPage = () => {
	return (
		<Layout headerVariant="absolute">
			<About />
		</Layout>
	);
};

export const getStaticProps = wrapper.getStaticProps(({ dispatch }) => async ({ locale }) => {
	await dispatch(getIP());

	if (locale === 'che') {
		await axios.get(`/languages/index?lang=che_CHE`);
		await dispatch(getPage('about'));
	} else if (locale === 'ru') {
		await axios.get(`/languages/index?lang=ru-RU`);
		await dispatch(getPage('about'));
	}

	return {
		props: {
			...(await serverSideTranslations(locale as string)),
		},
		revalidate: 1,
	};
});

export default AboutPage;
