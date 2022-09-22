import { Layout } from '@/components/Layout/Layout';
import { Hero, Category, Music } from '@/screens/Home/index';
import { wrapper } from '@/store/store';
import { getHomeCategories } from '@/api/api';
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
	return (
		<Layout>
			<Hero />
			<Category />
			<Music />
		</Layout>
	);
};

export const getStaticProps = wrapper.getStaticProps(({ dispatch }) => async () => {
	await dispatch(getHomeCategories());

	return { props: {} };
});

export default HomePage;
