import styled from 'styled-components';

import WatchlistForm from '../components/WatchlistForm';

export default function Watchlist({
  watchlist,
  onAddToWatchlist,
  onRemoveFromWatchlist
}) {
  return (
    <Main>
      <h2>Merkliste</h2>
      <WatchlistForm onAddToWatchlist={onAddToWatchlist} />
      <Grid>
        {watchlist.map((item, index) => (
          <ItemCard key={index}>
            <p>{item.title}</p>
            <p>{item.category}</p>
            <button onClick={() => onRemoveFromWatchlist(item)}>x</button>
          </ItemCard>
        ))}
      </Grid>
    </Main>
  );
}

const Main = styled.main`
  margin: 5rem 0;

  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const Grid = styled.div`
  margin-top: 3rem;
  display: grid;
  justify-content: center;
  gap: 1rem;
`;

const ItemCard = styled.div`
  max-width: 10rem;
  border-radius: 0.4rem;
  padding: 1.2rem 1rem;
  background: hotpink;
  color: ivory;
`;
