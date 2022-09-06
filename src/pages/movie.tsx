import { Layout } from '@/components/Layout/Layout';
import { Movie } from '@/screens/Movie/Movie';
import type { NextPage } from 'next';

const MoviePage: NextPage = () => {
	return (
		<Layout withoutFooter headerVariant="blur">
			<Movie />
		</Layout>
	);
};

export default MoviePage;
