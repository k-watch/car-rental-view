import { dehydrate, QueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { CarInterface } from '@src/types/api';
import { getCarList } from '@src/api/car';

const useCarDetail = () => {
  const router = useRouter();
  const { id: carId } = router.query;
  const [car, setCar] = useState<CarInterface>();

  const { data, isLoading } = useQuery<CarInterface[] | undefined>(
    ['carList'],
    getCarList
  );

  useEffect(() => {
    if (data) {
      data.forEach((carInfo) => {
        if (carInfo.id.toString() === carId) {
          setCar(carInfo);
        }
      });
    }
  }, [data]);

  return { car, isLoading };
};

export default useCarDetail;

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
