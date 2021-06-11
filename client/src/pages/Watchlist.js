import styled from 'styled-components';

import WatchlistForm from '../components/WatchlistForm';

export default function Watchlist() {
  return (
    <Main>
      <h2>Merkliste</h2>
      <WatchlistForm />
    </Main>
  );
}

const Main = styled.main`
  margin-top: 4rem;

  h2 {
    text-align: center;
  }
`;
