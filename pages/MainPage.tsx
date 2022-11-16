import Layout from '@src/components/common/Layout';
import Header from '@src/components/common/Header';
import CarNavigator from '@src/components/car/CarNavigator';
import { TITLE_TEXT } from '@src/types/enum';
import CarList from '@src/components/car/CarList';

const MainPage = () => {
  return (
    <Layout>
      <Header title={TITLE_TEXT.MAIN} />
      <CarNavigator />
      <CarList />
    </Layout>
  );
};

export default MainPage;
