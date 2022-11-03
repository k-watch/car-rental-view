export const getAmountPattern = (amount: string | number) => {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const calDay = (day: string | number) => {
  const current = new Date().getTime();
  const created = new Date(day).getTime();

  return (current - created) / (1000 * 60 * 60 * 24);
};
