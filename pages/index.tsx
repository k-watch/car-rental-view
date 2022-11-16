import { dehydrate, QueryClient } from '@tanstack/react-query';
import { DefaultSeo } from 'next-seo';

import MainPage from './MainPage';
import { DEFAULT_SEO } from '@src/types/enum';
import { CarInterface } from '@src/types/api';
import { getCarList } from '@src/api/car';

const Home = () => {
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <MainPage />
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery<CarInterface[] | undefined>(
    ['getCarList'],
    getCarList
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
