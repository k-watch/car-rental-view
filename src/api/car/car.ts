import axiosInstance from 'api';
import { API_URL } from 'types/enum';

export const getCarList = async <T>() => {
  const { data } = await axiosInstance.get<T>(API_URL.CAR_LIST);

  return data;
};

export default getCarList;
