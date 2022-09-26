import { Layout } from '@/components/Layout/Layout';
import { Movie } from '@/screens/Movie/Movie';
import { wrapper } from '@/store/store';
import { getMovieById } from '@/api';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { NextPage, GetStaticPaths } from 'next';
import { withTranslation } from 'next-i18next';

const MoviePage: NextPage = () => {
	return (
		<Layout sticky headerVariant="blur">
			<Movie />
		</Layout>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [],
		fallback: 'blocking',
	};
};

export const getStaticProps = wrapper.getStaticProps(({ dispatch }) => async ({ params, locale }) => {
	await dispatch(getMovieById(params?.id));

	return {
		props: {
			...(await serverSideTranslations(locale as string)),
		},
	};
});

export default withTranslation()(MoviePage);
