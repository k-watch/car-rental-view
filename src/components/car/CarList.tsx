import {
  CAR_ACTION_TYPE,
  useCarDispatch,
  useCarState,
} from 'modules/context/CarContext';
import useFetch from 'modules/hooks/useQuery';
import { useEffect } from 'react';
import styled from 'styled-components';
import { CarInterface } from 'types/api';
import { API_URL } from 'types/enum';
import CarItem from './CarItem';

const CarList = () => {
  const { carList, segment } = useCarState();

  const dispatch = useCarDispatch();

  const { isLoading, data, error } = useFetch<CarInterface[]>(API_URL.CAR_LIST);

  useEffect(() => {
    return () => {
      dispatch({ type: CAR_ACTION_TYPE.INIT_CAR_LIST, carList: [] });
    };
  }, []);

  useEffect(() => {
    if (data) {
      dispatch({ type: CAR_ACTION_TYPE.SET_CAR_LIST, carList: data });
    }
  }, [dispatch, data]);

  if (isLoading) return <>로딩중</>;
  if (error) {
    return <>에러</>;
  }

  return (
    <div>
      <Wrap>
        {carList &&
          carList.map((car) => (
            <li key={car.id}>
              {segment === 'ALL' && <CarItem {...car} />}
              {segment === car.attribute.segment && <CarItem {...car} />}
            </li>
          ))}
      </Wrap>
    </div>
  );
};

export default CarList;

const Wrap = styled.ul`
  height: 400px;
  overflow: auto;

  li {
    border: 1px solid black;
  }
`;
