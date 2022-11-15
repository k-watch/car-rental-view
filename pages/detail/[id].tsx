import Layout from '@src/components/common/Layout';
import Header from '@src/components/common/Header';
import { TITLE_TEXT } from '@src/types/enum';
import CarDetail from '@src/components/car/CarDetail';

const CarDetailPage = () => {
  return (
    <>
      <Layout>
        <Header title={TITLE_TEXT.DETAIL} isBack />
        <CarDetail />
      </Layout>
    </>
  );
};

export default CarDetailPage;
