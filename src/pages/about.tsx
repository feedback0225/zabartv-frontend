import { Layout } from '@/components/Layout/Layout';
import { About } from '@/screens/About/About';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { NextPage, GetStaticProps } from 'next';
import { wrapper } from '@/store/store';
import { getIP } from '@/api';

const AboutPage: NextPage = () => {
	return (
		<Layout headerVariant="absolute">
			<About />
		</Layout>
	);
};

export const getStaticProps = wrapper.getStaticProps(({ dispatch }) => async ({ locale }) => {
	await dispatch(getIP());

	return {
		props: {
			...(await serverSideTranslations(locale as string)),
		},
	};
});

export default AboutPage;
