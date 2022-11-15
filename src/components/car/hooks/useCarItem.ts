import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

import { CarInterface } from '@src/types/api';
import { calculateDay } from '@src/utils/common';

const useCarItem = (car: CarInterface) => {
  const router = useRouter();
  const newCar = useRef(false);

  useEffect(() => {
    if (car) {
      if (calculateDay(car.createdAt) <= 1) newCar.current = true;
    }
  }, [car]);

  return { router, newCar };
};

export default useCarItem;
