import styled from 'styled-components';

export default function Library() {
  return (
    <MainStyled>
      <h2>Meine Sammlung</h2>
    </MainStyled>
  );
}

const MainStyled = styled.main`
  margin-top: 4rem;

  h2 {
    text-align: center;
  }
`;
