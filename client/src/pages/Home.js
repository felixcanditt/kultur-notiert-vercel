import styled from 'styled-components';

export default function Home({ serverMessage }) {
  return (
    <Main>
      <h2>Home</h2>
      <p>{serverMessage}</p>
    </Main>
  );
}

const Main = styled.main`
  margin-top: 5rem;

  h2 {
    text-align: center;
  }
`;
