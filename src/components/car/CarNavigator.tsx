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
      <button type="button" onClick={() => onClick('ALL')}>
        {SEGMENT.ALL}
      </button>
      <button type="button" onClick={() => onClick('E')}>
        {SEGMENT.E}
      </button>
      <button type="button" onClick={() => onClick('D')}>
        {SEGMENT.D}
      </button>
      <button type="button" onClick={() => onClick('C')}>
        {SEGMENT.C}
      </button>
      <button type="button" onClick={() => onClick('SUV')}>
        {SEGMENT.SUV}
      </button>
    </S.Wrap>
  );
};

export default CarNavigator;

const S = {
  Wrap: styled.div`
    display: block;

    border-top: 1px solid ${({ theme }) => theme.colors.black};
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  `,
};
