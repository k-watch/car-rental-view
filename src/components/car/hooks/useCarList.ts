import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { useCarState } from '@src/modules/context/CarContext';
import { CarInterface } from '@src/types/api';
import { getCarList } from '@src/api/car';

const useCarList = () => {
  const { segment } = useCarState();
  const [carList, setCarList] = useState<CarInterface[]>([]);

  const { data, isLoading } = useQuery<CarInterface[]>(
    ['getCarList'],
    getCarList
  );

  useEffect(() => {
    if (data) {
      if (segment === 'ALL') {
        setCarList([...data]);
      } else {
        setCarList((prev) => {
          prev = [
            ...data.filter((car) =>
              car.attribute.segment === segment ? car : false
            ),
          ];

          return prev;
        });
      }
    }
  }, [segment, data]);

  return { carList, isLoading };
};

export default useCarList;
