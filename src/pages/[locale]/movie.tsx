import { Layout } from '@/components/Layout/Layout';
import { Movie } from '@/screens/Movie/Movie';
import { getStaticPaths, makeStaticProps } from '@/lib/getStatic';
import type { NextPage } from 'next';

const MoviePage: NextPage = () => {
	return (
		<Layout sticky headerVariant="blur">
			<Movie />
		</Layout>
	);
};

export default MoviePage;

const getStaticProps = makeStaticProps(['common', 'menu']);
export { getStaticPaths, getStaticProps };
