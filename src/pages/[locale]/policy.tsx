import { Layout } from '@/components/Layout/Layout';
import { Policy } from '@/screens/Policy/Policy';
import { getStaticPaths, makeStaticProps } from '@/lib/getStatic';
import type { NextPage } from 'next';

const PolicyPage: NextPage = () => {
	return (
		<Layout>
			<Policy />
		</Layout>
	);
};

export default PolicyPage;

const getStaticProps = makeStaticProps(['common', 'menu']);
export { getStaticPaths, getStaticProps };
