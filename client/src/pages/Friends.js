import styled from 'styled-components';

export default function Friends() {
  return (
    <MainStyled>
      <h2>Freund*innen</h2>
    </MainStyled>
  );
}

const MainStyled = styled.main`
  margin-top: 4rem;

  h2 {
    text-align: center;
  }
`;
