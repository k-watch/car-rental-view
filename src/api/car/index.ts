import { httpInstance } from '../httpInstance';
import { CarListResInterface } from '@src/types/api';
import { API_URL } from '@src/types/enum';

export const getCarList = async () => {
  const response = await httpInstance.get<CarListResInterface>(
    API_URL.GET_CAR_LIST
  );

  const { payload } = response as never;

  return payload;
};
