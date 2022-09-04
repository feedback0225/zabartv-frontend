import { Layout } from '@/components/Layout/Layout';
import { Cabinet } from '@/screens/Cabinet/Cabinet';
import type { NextPage } from 'next';

const CabinetPage: NextPage = () => {
  return (
    <Layout withoutFooter>
      <Cabinet />
    </Layout>
  )
}

export default CabinetPage