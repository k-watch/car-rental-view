import { DefaultSeo } from 'next-seo';

import MainPage from './MainPage';
import { DEFAULT_SEO } from '@src/types/enum';

const Home = () => {
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <MainPage />
    </>
  );
};

export default Home;
