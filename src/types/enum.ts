export const API_URL = {
  CAR_LIST: '/cars',
} as const;

export const NAVIGATE_URL = {
  MAIN: '/',
  DETAIL: '/:carId',
} as const;

export const TITLE_TEXT = {
  MAIN: '전체차량',
  DETAIL: '차량상세',
} as const;

export const SEGMENT = {
  ALL: '전체',
  C: '소형',
  D: '중형',
  E: '대형',
  SUV: 'SUV',
} as const;

export const FUEL_TYPE = {
  gasoline: '가솔린',
  hybrid: '하이브리드',
  ev: '전기',
} as const;

export type ApiUrlType = typeof API_URL[keyof typeof API_URL];
export type TitleTextType = typeof TITLE_TEXT[keyof typeof TITLE_TEXT];
export type SegmentType = keyof typeof SEGMENT;
export type FuelType = keyof typeof FUEL_TYPE;
