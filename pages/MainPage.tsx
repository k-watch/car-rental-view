import Header from '@src/components/common/Header';
import CarNavigator from '@src/components/car/CarNavigator';
import { TITLE_TEXT } from '@src/types/enum';
import CarList from '@src/components/car/CarList';

const MainPage = () => {
  return (
    <>
      <Header title={TITLE_TEXT.MAIN} />
      <CarNavigator />
      <CarList />
    </>
  );
};

export default MainPage;
