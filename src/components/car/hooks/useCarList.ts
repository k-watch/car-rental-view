import { useEffect, useState } from 'react';

import { useCarState } from '@src/modules/context/CarContext';
import { CarInterface } from '@src/types/api';

const useCarList = () => {
  const { segment, carList: data } = useCarState();
  const [carList, setCarList] = useState<CarInterface[]>([]);

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

  return { carList };
};

export default useCarList;
