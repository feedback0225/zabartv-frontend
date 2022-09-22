import { Layout } from '@/components/Layout/Layout';
import { Subscribe } from '@/screens/Subscribe/Subscribe';
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

export const getStaticProps = wrapper.getStaticProps(({ dispatch }) => async () => {
	await dispatch(getPackages());

	return { props: {} };
});

export default SubscribePage;
