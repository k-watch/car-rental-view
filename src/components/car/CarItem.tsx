import { CarInterface } from 'types/api';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { SEGMENT, FUEL_TYPE } from 'types/enum';
import Img from 'components/common/Img';
import styled from 'styled-components';
import { getAmountPattern, calDay } from 'lib/common';

const CarItem = (car: CarInterface) => {
  const navigate = useNavigate();
  const newCar = useRef(false);

  useEffect(() => {
    if (car) {
      if (calDay(car.createdAt) <= 1) newCar.current = true;
    }
  }, [car]);

  return (
    <S.Wrap role="presentation" onClick={() => navigate(`/${car.id}`)}>
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
          height="100%"
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
