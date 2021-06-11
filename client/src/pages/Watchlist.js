import styled from 'styled-components';

import WatchlistForm from '../components/WatchlistForm';

export default function Watchlist() {
  return (
    <MainStyled>
      <h2>Merkliste</h2>
      <WatchlistForm />
    </MainStyled>
  );
}

const MainStyled = styled.main`
  margin-top: 4rem;

  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }
`;
