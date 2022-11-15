import styled from 'styled-components';

import {
  CAR_ACTION_TYPE,
  useCarDispatch,
} from '@src/modules/context/CarContext';
import { SegmentType } from '@src/types/enum';
import { flexBox } from '@src/styles/mixin';

interface carCategoryInterface {
  id: number;
  segment: SegmentType;
  name: string;
}

const carCategory: carCategoryInterface[] = [
  { id: 1, segment: 'ALL', name: '전체' },
  { id: 2, segment: 'E', name: '대형' },
  { id: 3, segment: 'D', name: '중형' },
  { id: 4, segment: 'C', name: '소형' },
  { id: 5, segment: 'SUV', name: 'SUV' },
];

const CarNavigator = () => {
  const dispatch = useCarDispatch();

  const onClick = (segment: SegmentType) => {
    dispatch({ type: CAR_ACTION_TYPE.SET_SEGMENT, segment });
  };

  return (
    <S.Wrap>
      <>
        {carCategory.map((category) => (
          <li key={category.id}>
            <S.Button type="button" onClick={() => onClick(category.segment)}>
              {category.name}
            </S.Button>
          </li>
        ))}
      </>
    </S.Wrap>
  );
};

export default CarNavigator;

const S = {
  Wrap: styled.ul`
    ${flexBox('row', 'flex-start')};
    padding: 5px 10px;
    border-top: 1px solid ${({ theme }) => theme.colors.black};
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  `,

  Button: styled.button`
    margin-right: 5px;
    padding: 3px 12px;
    background-color: ${({ theme }) => theme.colors.grey};
    border-radius: 40px;
    font-size: 14px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.black};

    :hover {
      background-color: ${({ theme }) => theme.colors.black};
      color: white;
    }
  `,
};
