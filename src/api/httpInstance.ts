import axios, { AxiosError, AxiosInstance } from 'axios';

import { ApiUrlType } from '@src/types/enum';

const BASE_API_URL = 'https://preonboarding.platdev.net/api';

const DEFAULT_CONFIG = {
  baseURL: `${BASE_API_URL}`,
  timeout: 5000,
} as const;

interface HttpInstanceInterface {
  get: <T>(
    url: ApiUrlType,
    params?: Record<string, unknown>
  ) => Promise<T | undefined>;
}

class HttpInstance implements HttpInstanceInterface {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create(DEFAULT_CONFIG);
  }

  get = async <T>(url: ApiUrlType, params?: Record<string, unknown>) => {
    try {
      const { data } = await this.instance.get<T>(url, params);

      return data;
    } catch (e) {
      if (e instanceof AxiosError) throw new Error(e.message);
    }
  };
}

export const httpInstance = new HttpInstance();
