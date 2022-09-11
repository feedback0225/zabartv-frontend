import { Layout } from '@/components/Layout/Layout';
import { Hero, Humor, Music } from '@/screens/Home/index';
import { getStaticPaths, makeStaticProps } from '@/lib/getStatic';
import { Cartoons } from '@/screens/Cartoons/Cartoons';
import type { NextPage } from 'next';

const CartoonsPage: NextPage = () => {
	return (
		<Layout>
			<Cartoons />
		</Layout>
	);
};

export default CartoonsPage;

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };
