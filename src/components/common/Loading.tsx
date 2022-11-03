import styled from 'styled-components';
import { absoluteCenter, flexBox } from 'styles/mixin';

const Loading = () => {
  return <S.Wrap>불러오는 중</S.Wrap>;
};

export default Loading;

const S = {
  Wrap: styled.div`
    ${flexBox()}
    ${absoluteCenter()}
		font-weight: bold;
  `,
};
