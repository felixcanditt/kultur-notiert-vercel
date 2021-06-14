import styled from 'styled-components';

export default function Home() {
  return (
    <Main>
      <h2>Home</h2>
    </Main>
  );
}

const Main = styled.main`
  margin: 5rem 0;
  h2 {
    text-align: center;
  }
`;
