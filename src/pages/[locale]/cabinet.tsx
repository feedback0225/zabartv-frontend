import { Layout } from '@/components/Layout/Layout';
import { Cabinet } from '@/screens/Cabinet/Cabinet';
import { getStaticPaths, makeStaticProps } from '@/lib/getStatic';
import type { NextPage } from 'next';

const CabinetPage: NextPage = () => {
	return (
		<Layout>
			<Cabinet />
		</Layout>
	);
};

export default CabinetPage;

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };
