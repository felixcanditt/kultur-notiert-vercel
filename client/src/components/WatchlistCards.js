import styled from 'styled-components';

import WatchlistCard from './WatchlistCard';

export default function WatchlistCards({
  currentPage,
  watchlist,
  currentFilter,
  onSetItemToBeEdited,
  onSetFormOnScreen,
  onRemoveFromWatchlist,
  onCheckItem,
}) {
  function listToBeRendered() {
    const watchlistNewest = watchlist.slice(0, 2);
    let relevantList;
    if (currentPage === 'watchlist') {
      if (currentFilter === 'noFilter') {
        relevantList = watchlist;
      } else {
        relevantList = watchlist.filter(
          (watchlistItem) => watchlistItem.category === currentFilter
        );
      }
    } else {
      relevantList = watchlistNewest;
    }
    return relevantList;
  }

  return (
    <Grid>
      {listToBeRendered(currentFilter).map((item) => (
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
  gap: 3rem;
`;
