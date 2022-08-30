import { Layout } from '@/components/Layout/Layout';
import { Home } from '@/screens/Home/Home';
import type { NextPage } from 'next';

const Index: NextPage = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  )
}

export default Index