import { Layout } from '@/components/Layout/Layout';
import { Policy } from '@/screens/Policy/Policy';
import type { NextPage } from 'next';

const PolicyPage: NextPage = () => {
  return (
    <Layout>
      <Policy />
    </Layout>
  )
}

export default PolicyPage