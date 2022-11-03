import getCarList from 'api/car/car';
import Loading from 'components/common/Loading';
import { useCarState } from 'modules/context/CarContext';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { absoluteCenter, flexBox } from 'styles/mixin';
import { CarInterface } from 'types/api';
import CarItem from './CarItem';

const CarList = () => {
  const { segment } = useCarState();
  const [list, setList] = useState<CarInterface[]>([]);

  const { data, isLoading, error, refetch } = useQuery<CarInterface[], Error>(
    'getCarList',
    getCarList,
    {
      enabled: false,
    }
  );

  useEffect(() => {
    if (segment) {
      refetch();
    }
  }, [segment]);

  const initList = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const carList = (data as any).payload as CarInterface[];
    if (segment === 'ALL') {
      setList([...carList]);
    } else {
      const temp = carList.filter((car) =>
        car.attribute.segment === segment ? car : false
      );
      setList([...temp]);
    }
  };

  useEffect(() => {
    if (data) {
      initList();
    }
  }, [segment, data]);

  if (isLoading) return <Loading />;
  if (error) {
    return <>에러</>;
  }

  return (
    <div>
      <S.Wrap>
        {list.length > 0 ? (
          <ul>
            {list.map((car) => (
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
