import { Layout } from '@/components/Layout/Layout';
import { NotFound } from '@/screens/NotFound/NotFound';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { NextPage, GetStaticProps } from 'next';

const NotFoundPage: NextPage = () => {
	return (
		<Layout headerVariant="absolute">
			<NotFound />
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async (params) => {
	const { locale } = params as { locale: string };

	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
		},
	};
};

export default NotFoundPage;
