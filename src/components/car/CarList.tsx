import styled from 'styled-components';

import useCarList from './hooks/useCarList';
import CarItem from './CarItem';

import { absoluteCenter, flexBox } from '@src/styles/mixin';

const CarList = () => {
  const { carList } = useCarList();

  return (
    <div>
      <S.Wrap>
        {carList.length > 0 ? (
          <ul>
            {carList.map((car) => (
              <li key={car.id}>
                <CarItem {...car} />
              </li>
            ))}
          </ul>
        ) : (
          <S.NoData>차량이 없습니다.</S.NoData>
        )}
      </S.Wrap>
    </div>
  );
};

export default CarList;

const S = {
  Wrap: styled.div`
    overflow: auto;
  `,

  NoData: styled.li`
    ${flexBox()}
    ${absoluteCenter()}
		font-weight: bold;
  `,
};
