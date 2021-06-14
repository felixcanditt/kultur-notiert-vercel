import styled from 'styled-components';

export default function Library() {
  return (
    <Main>
      <h2>Meine Sammlung</h2>
    </Main>
  );
}

const Main = styled.main`
  margin: 5rem 0;
  h2 {
    text-align: center;
  }
`;
