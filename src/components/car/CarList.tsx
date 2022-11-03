import getCarList from 'api/car/car';
import { useCarState } from 'modules/context/CarContext';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
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

  if (isLoading) return <>로딩중</>;
  if (error) {
    return <>에러</>;
  }

  return (
    <div>
      <Wrap>
        <ul>
          {list &&
            list.map((car) => (
              <li key={car.id}>
                <CarItem {...car} />
              </li>
            ))}
        </ul>
      </Wrap>
    </div>
  );
};

export default CarList;

const Wrap = styled.div`
  overflow: auto;
`;
