import { Layout } from '@/components/Layout/Layout';
import { Cartoons } from '@/screens/Cartoons/Cartoons';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { NextPage, GetStaticProps } from 'next';

const CartoonsPage: NextPage = () => {
	return (
		<Layout>
			<Cartoons />
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

export default CartoonsPage;
