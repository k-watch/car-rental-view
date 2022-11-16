import { useEffect } from 'react';
import { DefaultSeo } from 'next-seo';

import { CarInterface } from '@src/types/api';
import {
  CAR_ACTION_TYPE,
  useCarDispatch,
} from '@src/modules/context/CarContext';
import { getCarList } from '@src/api/car';
import { DEFAULT_SEO } from '@src/types/enum';
import MainPage from './MainPage';

interface HomeProps {
  payload: CarInterface[];
}

const Home = ({ payload: carList }: HomeProps) => {
  const dispatch = useCarDispatch();

  useEffect(() => {
    dispatch({ type: CAR_ACTION_TYPE.SET_CAR_LIST, carList });
  }, [carList, dispatch]);

  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <MainPage />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  try {
    const payload = (await getCarList()) as CarInterface[];

    return {
      props: {
        payload,
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};
