import { Layout } from '@/components/Layout/Layout';
import { Movie } from '@/screens/Movie/Movie';
import { wrapper } from '@/store/store';
import { getMovieById } from '@/api';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { NextPage } from 'next';

const MoviePage: NextPage = () => {
	return (
		<Layout sticky headerVariant="blur">
			<Movie />
		</Layout>
	);
};

export const getServerSideProps = wrapper.getServerSideProps(
	({ dispatch }) =>
		async ({ params, locale }) => {
			await dispatch(getMovieById(params?.id));

			return {
				props: {
					...(await serverSideTranslations(locale as string, ['common'])),
				},
			};
		}
);

export default MoviePage;
