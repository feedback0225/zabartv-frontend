import { Layout } from '@/components/Layout/Layout';
import { Hero, Humor, Music } from '@/screens/Home/index';
import { getStaticPaths, makeStaticProps } from '@/lib/getStatic';
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
	return (
		<Layout>
			<Hero />
			<Humor />
			<Music />
		</Layout>
	);
};

export default HomePage;

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };
