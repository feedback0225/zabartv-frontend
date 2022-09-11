import { Layout } from '@/components/Layout/Layout';
import { About } from '@/screens/About/About';
import { getStaticPaths, makeStaticProps } from '@/lib/getStatic';
import type { NextPage } from 'next';

const AboutPage: NextPage = () => {
	return (
		<Layout headerVariant="absolute">
			<About />
		</Layout>
	);
};

export default AboutPage;

const getStaticProps = makeStaticProps(['common', 'menu']);
export { getStaticPaths, getStaticProps };
