import { Layout } from '@/components/Layout/Layout';
import { Cabinet } from '@/screens/Cabinet/Cabinet';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { NextPage, GetStaticProps } from 'next';

const CabinetPage: NextPage = () => {
	return (
		<Layout>
			<Cabinet />
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

export default CabinetPage;
