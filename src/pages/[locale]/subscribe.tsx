import { Layout } from '@/components/Layout/Layout';
import { Subscribe } from '@/screens/Subscribe/Subscribe';
import { getI18nProps, getStaticPaths } from '@/lib/getStatic';
import { API_KEY, API_URL } from '@/constants/api';
import { IPackage } from '@/types/IPackage';
import type { NextPage, GetStaticProps } from 'next';
import axios from 'axios';

const getStaticProps: GetStaticProps = async (ctx) => {
	const { data } = await axios.get<IPackage[]>(
		`${API_URL}/packages/list?session_id=qweqwe&token=${API_KEY}`
	);

	return { props: { data, ...(await getI18nProps(ctx, ['common'])) } };
};

export { getStaticPaths, getStaticProps };

interface SubscribePageProps {
	data: IPackage[];
}

const SubscribePage: NextPage<SubscribePageProps> = ({ data }) => {
	return (
		<Layout>
			<Subscribe data={data} />
		</Layout>
	);
};

export default SubscribePage;
