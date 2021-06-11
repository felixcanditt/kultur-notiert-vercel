import styled from 'styled-components';

export default function Home() {
  return (
    <Main>
      <h2>Home</h2>
    </Main>
  );
}

const Main = styled.main`
  margin-top: 4rem;

  h2 {
    text-align: center;
  }
`;
