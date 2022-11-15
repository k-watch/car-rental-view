import styled from 'styled-components';

import useCarDetail from './hooks/useCarDetail';
import Loading from '../common/Loading';
import MetaTag from '@src/utils/common/MetaTag';
import { FUEL_TYPE, SEGMENT } from '@src/types/enum';
import { getAmountPattern, toLocaleDateKo } from '@src/utils/common';
import Img from '../common/Img';

const CarDetail = () => {
  const { car, isLoading } = useCarDetail();

  if (isLoading) return <Loading />;

  return (
    <S.Wrap>
      {car && (
        <div>
          <MetaTag
            title={`${car.attribute.brand} ${car.attribute.name}`}
            description={`월 ${car.amount} 원`}
            imgSrc={car.attribute.imageUrl}
            url="https://watch-carrental.netlify.app"
          />
          <S.Img>
            <Img
              width={300}
              height={200}
              src={car.attribute.imageUrl}
              alt={car.attribute.name}
              lazy
            />
          </S.Img>
          <S.Title>
            <p>{car.attribute.brand}</p>
            <p className="carName">{car.attribute.name}</p>
            <p className="amount">{`월 ${getAmountPattern(car.amount)} 원`}</p>
          </S.Title>

          <S.DivideWrap>차량정보</S.DivideWrap>
          <S.ValueWrap>
            <span className="title">차종</span>
            <span>{SEGMENT[car.attribute.segment]}</span>
          </S.ValueWrap>
          <S.ValueWrap>
            <span className="title">연료</span>
            <span>{FUEL_TYPE[car.attribute.fuelType]}</span>
          </S.ValueWrap>
          <S.ValueWrap>
            <span className="title">이용 가능일</span>
            <span>{`${toLocaleDateKo(car.startDate)}부터`}</span>
          </S.ValueWrap>
          {car.insurance && (
            <>
              <S.DivideWrap>보험</S.DivideWrap>
              <S.ValueWrap>
                <span className="title">{car.insurance[0].name}</span>
                <span>{car.insurance[0].description}</span>
              </S.ValueWrap>

              <S.ValueWrap>
                <span className="title">{car.insurance[1].name}</span>
                <span>{car.insurance[1].description}</span>
              </S.ValueWrap>
            </>
          )}
          {car.additionalProducts && (
            <div>
              <S.DivideWrap>추가상품</S.DivideWrap>
              <S.ValueWrap>
                <span className="title">{car.additionalProducts[0].name}</span>
                <span>{car.additionalProducts[0].amount}</span>
              </S.ValueWrap>
            </div>
          )}
        </div>
      )}
    </S.Wrap>
  );
};

export default CarDetail;

const S = {
  Wrap: styled.div`
    width: 100%;
    font-size: 14px;
  `,

  Img: styled.div`
    display: flex;
    justify-content: center;
    height: 180px;
    background-color: ${({ theme }) => theme.colors.grey};

    img {
      object-fit: contain;
    }
  `,

  Title: styled.div`
    padding: 10px;
    font-size: 16px;
    font-weight: bold;

    .carName {
      font-size: 18px;
    }

    .amount {
      margin-top: 30px;
      text-align: right;
      font-size: 14px;
    }
  `,

  DivideWrap: styled.div`
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.blue};
    font-size: 15px;
    font-weight: bold;
    color: white;
  `,

  ValueWrap: styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;

    .title {
      font-weight: bold;
    }
  `,
};
