import React from 'react';
import styled from 'styled-components';

import { absoluteCenter } from '@src/styles/mixin';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <S.Wrap>{children}</S.Wrap>;
};

export default Layout;

const S = {
  Wrap: styled.div`
    ${absoluteCenter()}

    max-width: 450px;
    width: 100%;
    min-width: 360px;
    height: 100%;

    border-left: 1px solid ${({ theme }) => theme.colors.black};
    border-right: 1px solid ${({ theme }) => theme.colors.black};
  `,
};
