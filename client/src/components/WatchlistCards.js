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
          key={index}
          item={item}
          index={index}
          onCheckItem={onCheckItem}
          onRemoveFromWatchlist={onRemoveFromWatchlist}
        />
      ))}
    </Grid>
  );
}

const Grid = styled.section`
  margin-top: 4rem;
  display: grid;
  justify-content: center;
  gap: 2rem;
`;
