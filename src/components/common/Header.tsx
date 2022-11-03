import { useNavigate } from 'react-router';
import { TitleTextType } from 'types/enum';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import styled from 'styled-components';

interface HeaderProps {
  isBack?: boolean;
  title: TitleTextType;
}

const Header = ({ title, isBack = false }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <S.Wrap>
      {isBack && (
        <span role="presentation" onClick={() => navigate(-1)}>
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
