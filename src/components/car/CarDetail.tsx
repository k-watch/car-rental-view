import getCarList from 'api/car/car';
import Img from 'components/common/Img';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { CarInterface } from 'types/api';
import { SEGMENT, FUEL_TYPE } from 'types/enum';
import { getAmountPattern } from 'lib/common';
import Loading from 'components/common/Loading';
import MetaTag from 'lib/MetaTag';

const options = {
  month: 'long',
  day: 'numeric',
  weekday: 'long',
};

const CarDetail = () => {
  const [car, setCar] = useState<CarInterface>();
  const { carId } = useParams();

  const { data, isLoading, error, refetch } = useQuery<CarInterface[], Error>(
    'getCarList',
    getCarList,
    {
      enabled: false,
    }
  );

  useEffect(() => {
    if (carId) refetch();
  }, [carId]);

  useEffect(() => {
    if (data) {
      const carList = (data as any).payload as CarInterface[];
      carList.forEach((tempCar) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        if (tempCar.id.toString() === carId!) {
          setCar(tempCar);
        }
      });
    }
  }, [data]);

  if (isLoading) return <Loading />;
  if (error) {
    return <>에러</>;
  }

  return (
    <S.Wrap>
      {car && (
        <div>
          <MetaTag {...car} />
          <S.Img>
            <Img
              width={300}
              height="100%"
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
            <span>
              {`${new Date(car.startDate).toLocaleDateString(
                'ko-KR',
                options as any
              )}부터`}
            </span>
          </S.ValueWrap>
          <S.DivideWrap>보험</S.DivideWrap>
          <S.ValueWrap>
            <span className="title">{car.insurance[0].name}</span>
            <span>{car.insurance[0].description}</span>
          </S.ValueWrap>
          <S.ValueWrap>
            <span className="title">{car.insurance[1].name}</span>
            <span>{car.insurance[1].description}</span>
          </S.ValueWrap>
          {car.additionalProducts.length > 0 && (
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
