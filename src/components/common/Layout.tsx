import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { absoluteCenter, flexBox } from 'styles/mixin';

const Layout = () => {
  return (
    <S.Wrap>
      <Outlet />
    </S.Wrap>
  );
};

export default Layout;

const S = {
  Wrap: styled.div`
    ${flexBox()}
    ${absoluteCenter}

		min-width: 360px;
    max-width: 450px;
    height: 100vh;

    border-left: 1px solid ${({ theme }) => theme.colors.black};
    border-right: 1px solid ${({ theme }) => theme.colors.black};
  `,
};
