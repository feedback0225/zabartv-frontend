import { Layout } from '@/components/Layout/Layout';
import { Subscribe } from '@/screens/Subscribe/Subscribe';
import { wrapper } from '@/store/store';
import { getIP } from '@/reducers/auth/thunks';
import { getPackages } from '@/reducers/packages/thunks';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { NextPage } from 'next';

const SubscribePage: NextPage = () => {
	return (
		<Layout>
			<Subscribe />
		</Layout>
	);
};

export const getStaticProps = wrapper.getStaticProps(({ dispatch }) => async ({ locale }) => {
	await dispatch(getPackages());
	await dispatch(getIP());

	return {
		props: {
			...(await serverSideTranslations(locale as string)),
		},
	};
});

export default SubscribePage;
