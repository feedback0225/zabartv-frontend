import { Layout } from '@/components/Layout/Layout';
import { NotFound } from '@/screens/NotFound/NotFound';
import { getStaticPaths, makeStaticProps } from '@/lib/getStatic';
import type { NextPage } from 'next';

const NotFoundPage: NextPage = () => {
	return (
		<Layout headerVariant="absolute">
			<NotFound />
		</Layout>
	);
};

export default NotFoundPage;

const getStaticProps = makeStaticProps(['common', 'menu']);
export { getStaticPaths, getStaticProps };
