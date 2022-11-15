import styled from 'styled-components';
import { useRouter } from 'next/router';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import { NAVIGATE_URL, TitleTextType } from '@src/types/enum';

interface HeaderProps {
  isBack?: boolean;
  title: TitleTextType;
}

const Header = ({ title, isBack = false }: HeaderProps) => {
  const router = useRouter();

  return (
    <S.Wrap>
      {isBack && (
        <span
          role="presentation"
          onClick={() => router.push(NAVIGATE_URL.MAIN)}
        >
          <AiOutlineArrowLeft />
        </span>
      )}
      <h1>{title}</h1>
    </S.Wrap>
  );
};

export default Header;

const S = {
  Wrap: styled.div`
    display: flex;
    align-items: center;
    padding: 15px;

    span {
      cursor: pointer;
    }

    h1 {
      margin: auto;
      font-weight: bold;
    }
  `,
};
