import { Layout } from '@/components/Layout/Layout';
import { Subscribe } from '@/screens/Subscribe/Subscribe';
import { getI18nProps, getStaticPaths } from '@/lib/getStatic';
import { wrapper } from '@/store/store';
import { getPackages } from '@/api/api';
import type { NextPage } from 'next';

const SubscribePage: NextPage = () => {
	return (
		<Layout>
			<Subscribe />
		</Layout>
	);
};

const getStaticProps = wrapper.getStaticProps(({ dispatch }) => async (ctx) => {
	await dispatch(getPackages());

	return { props: { ...(await getI18nProps(ctx, ['common'])) } };
});

export { getStaticPaths, getStaticProps };

export default SubscribePage;
