import styled from 'styled-components';

const Loading = () => {
  return <S.Loading />;
};

export default Loading;

const S = {
  Loading: styled.div`
    position: relative;
    top: 45%;
    left: 40%;
    width: 40px;
    height: 40px;
    margin: 20px;
    border: 5px solid ${({ theme }) => theme.colors.lightGrey};
    border-top-color: ${({ theme }) => theme.colors.deepGrey};
    border-radius: 50%;
    animation: spin 0.7s infinite ease-in-out;

    @keyframes spin {
      to {
        transform: rotate(1turn);
      }
    }
  `,
};
