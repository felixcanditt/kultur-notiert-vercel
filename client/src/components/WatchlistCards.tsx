import styled from 'styled-components';
import Card from './Card';
import { CurrentPage, ListItem, CategoryName } from '../lib/types';

type Props = {
  item: ListItem;
  deleteItem: (value: ListItem) => void;
  onCheckItem: (value: ListItem) => void;
  onSetItemToBeEdited: (value: ListItem) => void;
  onSetFormOnScreen: (value: boolean) => void;
  currentPage: CurrentPage;
  watchlist: ListItem[];
  onRemoveFromWatchlist: (value: ListItem) => void;
  filter: CategoryName | null;
};

export default function WatchlistCards({
  currentPage,
  watchlist,
  filter,
  onSetItemToBeEdited,
  onSetFormOnScreen,
  onRemoveFromWatchlist,
  onCheckItem,
}: Props) {
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
