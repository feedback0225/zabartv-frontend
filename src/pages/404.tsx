import { Layout } from '@/components/Layout/Layout';
import { NotFound } from '@/screens/NotFound/NotFound';
import type { NextPage } from 'next';

const NotFoundPage: NextPage = () => {
  return (
    <Layout headerVariant='absolute'>
      <NotFound />
    </Layout>
  )
}

export default NotFoundPage