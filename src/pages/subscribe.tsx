import { Layout } from '@/components/Layout/Layout';
import { Subscribe } from '@/screens/Subscribe/Subscribe';
import { wrapper } from '@/store/store';
import { getPackages } from '@/api';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { NextPage } from 'next';

const SubscribePage: NextPage = () => {
	return (
		<Layout>
			<Subscribe />
		</Layout>
	);
};

export const getStaticProps = wrapper.getStaticProps(({ dispatch }) => async (params) => {
	await dispatch(getPackages());

	const { locale } = params as { locale: string };

	return {
		props: {
			...(await serverSideTranslations(locale as string)),
		},
	};
});

export default SubscribePage;
