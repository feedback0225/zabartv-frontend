import { Layout } from '@/components/Layout/Layout';
import { NotFound } from '@/screens/NotFound/NotFound';
import type { NextPage } from 'next';

const NotFoundPage: NextPage = () => {
  return (
    <Layout absoluteHeader>
      <NotFound />
    </Layout>
  )
}

export default NotFoundPage