const options = {
  month: 'long',
  day: 'numeric',
  weekday: 'long',
};

const ONE_DAY = 1000 * 60 * 60 * 24;

export const getAmountPattern = (amount: string | number) => {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const calculateDay = (day: string | number) => {
  const current = new Date().getTime();
  const created = new Date(day).getTime();

  return (current - created) / ONE_DAY;
};

export const toLocaleDateKo = (date: string) => {
  return new Date(date).toLocaleDateString(
    'ko-KR',
    options as Intl.DateTimeFormatOptions
  );
};

export const isValidArray = <T>(target: Array<T> | undefined) => {
  if (!target) return false;

  return target.length > 0;
};
