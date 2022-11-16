import { useCarState } from '@src/modules/context/CarContext';

const useCarDetail = () => {
  const { car } = useCarState();

  return { car };
};

export default useCarDetail;
