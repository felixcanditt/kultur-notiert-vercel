import styled from 'styled-components';

import WatchlistCard from './WatchlistCard';

export default function WatchlistCards({
  watchlist,
  onSetItemToBeEdited,
  onRemoveFromWatchlist,
  onCheckItem
}) {
  return (
    <Grid>
      {watchlist.map((item) => (
        <WatchlistCard
          key={item.id}
          item={item}
          onCheckItem={onCheckItem}
          onSetItemToBeEdited={onSetItemToBeEdited}
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
