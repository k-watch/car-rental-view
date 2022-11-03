import { CarInterface } from 'types/api';
import { useNavigate } from 'react-router-dom';
import { SEGMENT, FUEL_TYPE } from 'types/enum';
import Img from 'components/common/Img';
import styled from 'styled-components';
import getAmountPattern from 'lib/common';

const CarItem = (car: CarInterface) => {
  const navigate = useNavigate();

  return (
    <S.Wrap role="presentation" onClick={() => navigate(`/${car.id}`)}>
      <S.Content>
        <div className="title">
          <p>{car.attribute.brand}</p>
          <p>{car.attribute.name}</p>
        </div>
        <div>
          <p>
            {SEGMENT[car.attribute.segment]} /{' '}
            {FUEL_TYPE[car.attribute.fuelType]}
          </p>
          <p>월 {getAmountPattern(car.amount)}원부터</p>
        </div>
        {/* <div>{car.createdAt}</div> */}
      </S.Content>
      <Img
        width={150}
        height="100%"
        src={car.attribute.imageUrl}
        alt={car.attribute.name}
        lazy
      />
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

    img {
      margin-left: auto;
    }
  `,

  Content: styled.div`
    .title {
      margin-bottom: 10px;
      font-weight: bold;
    }
  `,
};
