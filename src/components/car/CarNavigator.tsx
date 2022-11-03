import { CAR_ACTION_TYPE, useCarDispatch } from 'modules/context/CarContext';
import { SEGMENT, SegmentType } from 'types/enum';
import styled from 'styled-components';

const CarNavigator = () => {
  const dispatch = useCarDispatch();

  const onClick = (segment: SegmentType) => {
    dispatch({ type: CAR_ACTION_TYPE.SET_SEGMENT, segment });
  };

  return (
    <S.Wrap>
      <S.Button type="button" onClick={() => onClick('ALL')}>
        {SEGMENT.ALL}
      </S.Button>
      <S.Button type="button" onClick={() => onClick('E')}>
        {SEGMENT.E}
      </S.Button>
      <S.Button type="button" onClick={() => onClick('D')}>
        {SEGMENT.D}
      </S.Button>
      <S.Button type="button" onClick={() => onClick('C')}>
        {SEGMENT.C}
      </S.Button>
      <S.Button type="button" onClick={() => onClick('SUV')}>
        {SEGMENT.SUV}
      </S.Button>
    </S.Wrap>
  );
};

export default CarNavigator;

const S = {
  Wrap: styled.div`
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
