import { Layout } from '@/components/Layout/Layout';
import { Policy } from '@/screens/Policy/Policy';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { NextPage, GetStaticProps } from 'next';

const PolicyPage: NextPage = () => {
	return (
		<Layout>
			<Policy />
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async (params) => {
	const { locale } = params as { locale: string };

	return {
		props: {
			...(await serverSideTranslations(locale as string)),
		},
	};
};

export default PolicyPage;
