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
  const filteredList = watchlist.filter((item) => item.category === filter);

  function listToBeRendered() {
    const watchlistNewest = watchlist.slice(0, 2);
    let relevantList;
    console.log(filteredList);
    currentPage === "watchlist"
      ? filter
        ? (relevantList = filteredList)
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
