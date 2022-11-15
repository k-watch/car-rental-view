import { NextPage } from 'next';
import { DefaultSeo } from 'next-seo';
import Link from 'next/link';

import Layout from '@src/components/common/Layout';
import MainPage from './MainPage';
import { DEFAULT_SEO } from '@src/types/enum';

const Home: NextPage = () => {
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <Layout>
        <Link href="/">
          <MainPage />
        </Link>
      </Layout>
    </>
  );
};

export default Home;
