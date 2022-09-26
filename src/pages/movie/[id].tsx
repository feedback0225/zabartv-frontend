import { Layout } from '@/components/Layout/Layout';
import { Movie } from '@/screens/Movie/Movie';
import { wrapper } from '@/store/store';
import { getMovieById } from '@/api';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';

const MoviePage: NextPage = () => {
	return (
		<Layout sticky headerVariant="blur">
			<Movie />
		</Layout>
	);
};

export const getServerSideProps = wrapper.getServerSideProps(({ dispatch }) => async (ctx) => {
	const {
		params: { id },
		locale,
	} = ctx as { params: ParsedUrlQuery; locale: string };

	await dispatch(getMovieById(id));

	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
		},
	};
});

export default MoviePage;
