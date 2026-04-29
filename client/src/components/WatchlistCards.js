import styled from 'styled-components';

import WatchlistCard from './WatchlistCard';
import Card from './Card';

export default function WatchlistCards({
  currentPage,
  watchlist,
  filter,
  onSetItemToBeEdited,
  onSetFormOnScreen,
  onRemoveFromWatchlist,
  onCheckItem,
}) {
  const filteredList = watchlist.filter((item) => item.category === filter);

  function listToBeRendered() {
    const watchlistNewest = watchlist.slice(0, 2);
    let relevantList;
    currentPage === 'watchlist'
      ? filter
        ? (relevantList = filteredList)
        : (relevantList = watchlist)
      : (relevantList = watchlistNewest);
    return relevantList;
  }

  return (
    <Grid>
      {listToBeRendered().map((item) => (
        <Card
          key={item.id}
          cardType="watchlist"
          item={item}
          onSetItemToBeEdited={onSetItemToBeEdited}
          deleteItem={onRemoveFromWatchlist}
          onCheckItem={onCheckItem}
          onSetFormOnScreen={onSetFormOnScreen}
        />
      ))}
    </Grid>
  );
}

const Grid = styled.section`
  margin-top: 2.5rem;
  display: grid;
  justify-content: center;
  gap: 3rem;
`;
