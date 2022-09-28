import { Layout } from '@/components/Layout/Layout';
import { Cartoons } from '@/screens/Cartoons/Cartoons';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { NextPage } from 'next';
import { wrapper } from '@/store/store';
import { getCategory } from '@/api';

const CartoonsPage: NextPage = () => {
	return (
		<Layout>
			<Cartoons />
		</Layout>
	);
};

export const getStaticProps = wrapper.getStaticProps(({ dispatch }) => async ({ locale }) => {
	await dispatch(getCategory());

	return {
		props: {
			...(await serverSideTranslations(locale as string)),
		},
	};
});

export default CartoonsPage;
