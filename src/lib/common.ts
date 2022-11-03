export const getAmountPattern = (amount: string | number) => {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export default getAmountPattern;
