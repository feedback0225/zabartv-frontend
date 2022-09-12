import { Layout } from '@/components/Layout/Layout';
import { Subscribe } from '@/screens/Subscribe/Subscribe';
import { getStaticPaths, makeStaticProps } from '@/lib/getStatic';
import type { NextPage } from 'next';

const SubscribePage: NextPage = () => {
	return (
		<Layout>
			<Subscribe />
		</Layout>
	);
};

export default SubscribePage;

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };
