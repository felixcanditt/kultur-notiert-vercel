import styled from 'styled-components';

import WatchlistCard from './WatchlistCard';

export default function WatchlistCards({
  watchlist,
  onRemoveFromWatchlist,
  onCheckItem
}) {
  return (
    <Grid>
      {watchlist.map((item, index) => (
        <WatchlistCard
          item={item}
          index={index}
          onCheckItem={onCheckItem}
          onRemoveFromWatchlist={onRemoveFromWatchlist}
        />
      ))}
    </Grid>
  );
}

const Grid = styled.div`
  margin-top: 3rem;
  display: grid;
  justify-content: center;
  gap: 1rem;
`;
