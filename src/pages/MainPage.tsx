import Header from 'components/common/Header';
import { TITLE_TEXT } from 'types/enum';
import CarNavigator from 'components/car/CarNavigator';
import CarList from 'components/car/CarList';

const MainPage = () => {
  return (
    <div>
      <Header title={TITLE_TEXT.MAIN} />
      <CarNavigator />
      <CarList />
    </div>
  );
};

export default MainPage;
