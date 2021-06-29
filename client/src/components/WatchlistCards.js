import styled from 'styled-components';

import WatchlistCard from './WatchlistCard';

export default function WatchlistCards({
  isPage,
  watchlist,
  onSetItemToBeEdited,
  onSetFormOnScreen,
  onRemoveFromWatchlist,
  onCheckItem
}) {
  const watchlistNewest = watchlist.slice(0, 2);

  function displayCards() {
    if (isPage === 'watchlist') {
      return (
        <>
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
        </>
      );
    } else {
      return (
        <>
          {watchlistNewest.map((item) => (
            <WatchlistCard
              key={item.id}
              item={item}
              onSetItemToBeEdited={onSetItemToBeEdited}
              onRemoveFromWatchlist={onRemoveFromWatchlist}
              onCheckItem={onCheckItem}
              onSetFormOnScreen={onSetFormOnScreen}
            />
          ))}
        </>
      );
    }
  }

  return <Grid>{displayCards()}</Grid>;
}

const Grid = styled.section`
  margin-top: 3rem;
  display: grid;
  justify-content: center;
  gap: 3rem;
`;
