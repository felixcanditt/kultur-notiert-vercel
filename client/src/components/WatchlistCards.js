import styled from 'styled-components';

import WatchlistCard from './WatchlistCard';

export default function WatchlistCards({
  watchlist,
  onSetItemToBeEdited,
  onSetFormOnScreen,
  onRemoveFromWatchlist,
  onCheckItem
}) {
  return (
    <Grid>
      {watchlist.map((item) => (
        <WatchlistCard
          key={item.id}
          item={item}
          onSetItemToBeEdited={onSetItemToBeEdited}
          onRemoveFromWatchlist={onRemoveFromWatchlist}
          onCheckItem={onCheckItem}
          onSetFormOnScreen={onSetFormOnScreen}
        />
      ))}
    </Grid>
  );
}

const Grid = styled.section`
  margin-top: 3rem;
  display: grid;
  justify-content: center;
  gap: 2rem;
`;
