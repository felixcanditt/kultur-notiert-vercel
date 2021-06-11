import styled from 'styled-components';

import WatchlistForm from '../components/WatchlistForm';

export default function Watchlist({ onAddWatchlistItem }) {
  return (
    <MainStyled>
      <h2>Merkliste</h2>
      <WatchlistForm onAddWatchlistItem={onAddWatchlistItem} />
    </MainStyled>
  );
}

const MainStyled = styled.main`
  margin-top: 5rem;

  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }
`;
