import { Layout } from '@/components/Layout/Layout';
import { About } from '@/screens/About/About';
import type { NextPage } from 'next';

const AboutPage: NextPage = () => {
  return (
    <Layout absoluteHeader withoutFooter>
      <About />
    </Layout>
  )
}

export default AboutPage