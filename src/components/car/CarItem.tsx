import styled from 'styled-components';

import { CarInterface } from '@src/types/api';
import useCarItem from './hooks/useCarItem';
import { getAmountPattern } from '@src/utils/common';
import { SEGMENT, FUEL_TYPE } from '@src/types/enum';
import Img from '../common/Img';

const CarItem = (car: CarInterface) => {
  const { router, newCar } = useCarItem(car);

  return (
    <S.Wrap
      role="presentation"
      onClick={() => router.push(`/detail/${car.id}`)}
    >
      <S.Content>
        <div className="title">
          <p>{car.attribute.brand}</p>
          <p>{car.attribute.name}</p>
        </div>
        <div>
          <p>
            {SEGMENT[car.attribute.segment]} /
            {FUEL_TYPE[car.attribute.fuelType]}
          </p>
          <p>월 {getAmountPattern(car.amount)}원부터</p>
        </div>
      </S.Content>

      <div className="imgWrap">
        <Img
          width={150}
          height={100}
          src={car.attribute.imageUrl}
          alt={car.attribute.name}
          lazy
        />
        {newCar && <div className="newCar">신규</div>}
      </div>
    </S.Wrap>
  );
};

export default CarItem;

const S = {
  Wrap: styled.div`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
    cursor: pointer;

    .imgWrap {
      position: relative;
      margin-left: auto;
      background-color: ${({ theme }) => theme.colors.grey};

      img {
        margin-left: auto;
      }

      .newCar {
        position: absolute;
        top: -6px;
        right: -8px;
        padding: 2px 8px;
        background-color: ${({ theme }) => theme.colors.blue};
        border-radius: 40px;
        font-size: 12px;
        color: white;
      }
    }
  `,

  Content: styled.div`
    .title {
      margin-bottom: 10px;
      font-weight: bold;
    }
  `,
};
