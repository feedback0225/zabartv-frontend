import { Layout } from '@/components/Layout/Layout';
import { Hero, Humor, Music } from '@/screens/Home/index';
import type { NextPage } from 'next';

const Index: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Humor />
      <Music />
    </Layout>
  )
}

export default Index