import { Layout } from '@/components/Layout/Layout';
import { About } from '@/screens/About/About';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { NextPage, GetStaticProps } from 'next';

const AboutPage: NextPage = () => {
	return (
		<Layout headerVariant="absolute">
			<About />
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

export default AboutPage;
