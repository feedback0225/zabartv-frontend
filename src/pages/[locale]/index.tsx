import { Layout } from '@/components/Layout/Layout';
import { Hero, Category, Music } from '@/screens/Home/index';
import { getI18nProps, getStaticPaths } from '@/lib/getStatic';
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

const getStaticProps = wrapper.getStaticProps(({ dispatch }) => async (ctx) => {
	await dispatch(getHomeCategories());

	return { props: { ...(await getI18nProps(ctx, ['common'])) } };
});

export { getStaticPaths, getStaticProps };

export default HomePage;
