import { Layout } from '@/components/Layout/Layout';
import { Hero, Category, Music } from '@/screens/Home/index';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { wrapper } from '@/store/store';
import { getIP } from '@/reducers/auth/thunks';
import { getHomeCategories } from '@/reducers/home/thunks';
import type { NextPage } from 'next';
import { Player } from '@/components/Player/Player';
import axios from '@/utils/axios';

const HomePage: NextPage = () => {
	return (
		<Layout>
			<Hero />
			<Category />
			<Music />
			<Player />
		</Layout>
	);
};

export const getStaticProps = wrapper.getStaticProps(({ dispatch }) => async ({ locale }) => {
	await dispatch(getIP());

	if (locale === 'che') {
		await axios.get(`/languages/index?lang=uk-UA`);
		await dispatch(getHomeCategories());
	} else if (locale === 'ru') {
		await axios.get(`/languages/index?lang=ru-RU`);
		await dispatch(getHomeCategories());
	}

	return {
		props: {
			...(await serverSideTranslations(locale as string)),
		},
	};
});

export default HomePage;
