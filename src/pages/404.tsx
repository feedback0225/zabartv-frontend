import { Layout } from '@/components/Layout/Layout';
import { NotFound } from '@/screens/NotFound/NotFound';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { NextPage } from 'next';
import { wrapper } from '@/store/store';
import { getIP } from '@/reducers/auth/thunks';

const NotFoundPage: NextPage = () => {
	return (
		<Layout headerVariant="absolute">
			<NotFound />
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

export default NotFoundPage;
