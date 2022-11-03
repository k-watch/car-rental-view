import axiosInstance from 'api';
import { useEffect, useState } from 'react';
import { ApiUrlType } from 'types/enum';
import { AxiosError } from 'axios';

const useFetch = <T>(url: ApiUrlType) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | AxiosError | unknown | null>(null);

  const fetch = async () => {
    try {
      setIsLoading(true);

      const response = await axiosInstance.get<T>(url);
      const { payload } = response.data as never;

      setData(payload);
    } catch (e: unknown) {
      setError(e);
      return;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isLoading,
    data,
    error,
  };
};

export default useFetch;
