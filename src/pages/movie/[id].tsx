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
		async ({ query, locale }) => {
			await dispatch(getMovieById(query?.id));

			return {
				props: {
					...(await serverSideTranslations('ce' as string)),
				},
			};
		}
);

export default MoviePage;
