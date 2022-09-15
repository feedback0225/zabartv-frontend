import { Layout } from '@/components/Layout/Layout';
import { Subscribe } from '@/screens/Subscribe/Subscribe';
import { getI18nProps, getStaticPaths, makeStaticProps } from '@/lib/getStatic';
import axios from 'axios';
import type { NextPage } from 'next';

export async function getStaticProps(ctx: any) {
	const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
	return { props: { data, ...(await getI18nProps(ctx)) } };
}

export { getStaticPaths };

const SubscribePage: NextPage = ({ data }: any) => {
	console.log(data);

	return (
		<Layout>
			<Subscribe />
		</Layout>
	);
};

export default SubscribePage;
