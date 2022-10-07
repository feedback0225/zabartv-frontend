import { Layout } from '@/components/Layout/Layout';
import { Cartoons } from '@/screens/Cartoons/Cartoons';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { NextPage } from 'next';
import { wrapper } from '@/store/store';
import { getIP } from '@/reducers/auth/thunks';
import { getCategory } from '@/reducers/category/thunks';

const CartoonsPage: NextPage = () => {
	return (
		<Layout>
			<Cartoons />
		</Layout>
	);
};

export const getStaticProps = wrapper.getStaticProps(({ dispatch }) => async ({ locale }) => {
	await dispatch(getCategory());
	await dispatch(getIP());

	return {
		props: {
			...(await serverSideTranslations(locale as string)),
		},
	};
});

export default CartoonsPage;
