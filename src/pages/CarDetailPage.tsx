import Header from 'components/common/Header';
import { TITLE_TEXT } from 'types/enum';
import CarDetail from 'components/car/CarDetail';

const CarDetailPage = () => {
  return (
    <div>
      <Header title={TITLE_TEXT.DETAIL} />
      <CarDetail />
    </div>
  );
};

export default CarDetailPage;
