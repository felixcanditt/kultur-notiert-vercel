import styled from "styled-components";

import WatchlistCard from "./WatchlistCard";

export default function WatchlistCards({
  currentPage,
  filter,
  watchlist,
  onSetItemToBeEdited,
  onSetFormOnScreen,
  onRemoveFromWatchlist,
  onCheckItem,
}) {
  console.log(watchlist);

  const books = watchlist.filter((item) => item.category === "book");

  function listToBeRendered() {
    const watchlistNewest = watchlist.slice(0, 2);
    let relevantList;
    currentPage === "watchlist"
      ? filter === "books"
        ? (relevantList = books)
        : (relevantList = watchlist)
      : (relevantList = watchlistNewest);
    return relevantList;
  }

  return (
    <Grid>
      {listToBeRendered().map((item) => (
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
