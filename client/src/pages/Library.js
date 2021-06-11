import styled from 'styled-components';

export default function Library() {
  return (
    <Main>
      <h2>Meine Sammlung</h2>
    </Main>
  );
}

const Main = styled.main`
  margin-top: 4rem;

  h2 {
    text-align: center;
  }
`;
