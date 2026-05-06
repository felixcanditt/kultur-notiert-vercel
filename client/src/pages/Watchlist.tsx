import { useState, useEffect } from 'react';
import styled from 'styled-components';

import WatchlistForm from '../components/WatchlistForm';
import Filters from '../components/Filters';
import WatchlistCards from '../components/WatchlistCards';
import { ListItem, CurrentPage, CategoryName } from '../lib/types';

import plusIcon from '../images/plus.svg';

type Props = {
  onAddToWatchlist: (value: ListItem) => void;
  onEditWatchlist: (value: ListItem) => void;
  itemToBeEdited: ListItem | null;
  onSetItemToBeEdited: (value: null | ListItem) => void;
  onCheckItem: (value: ListItem) => void;
  currentPage: CurrentPage;
  watchlist: ListItem[];
  onRemoveFromWatchlist: (value: ListItem) => void;
  onSetCurrentPage: (value: CurrentPage) => void;
};

export default function Watchlist({
  onSetCurrentPage,
  currentPage,
  watchlist,
  onAddToWatchlist,
  itemToBeEdited,
  onSetItemToBeEdited,
  onEditWatchlist,
  onRemoveFromWatchlist,
  onCheckItem,
}: Props) {
  useEffect(() => {
    onSetCurrentPage('watchlist');
    onSetItemToBeEdited(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [formOnScreen, setFormOnScreen] = useState(false);
  const [filter, setFilter] = useState<CategoryName | null>(null);

  return (
    <main>
      <TitleWrapper>
        <h2>Merkliste</h2>
        <img
          src={plusIcon}
          alt="Neuen Eintrag zur Merkliste hinzufügen"
          onClick={() => setFormOnScreen(true)}
        />
      </TitleWrapper>

      {formOnScreen && (
        <WatchlistForm
          onSetFormOnScreen={setFormOnScreen}
          onAddToWatchlist={onAddToWatchlist}
          itemToBeEdited={itemToBeEdited}
          onSetItemToBeEdited={onSetItemToBeEdited}
          onEditWatchlist={onEditWatchlist}
        />
      )}

      <Filters filter={filter} onSetFilter={setFilter}></Filters>

      <WatchlistCards
        currentPage={currentPage}
        watchlist={watchlist}
        filter={filter}
        onSetItemToBeEdited={onSetItemToBeEdited}
        onSetFormOnScreen={setFormOnScreen}
        onRemoveFromWatchlist={onRemoveFromWatchlist}
        onCheckItem={onCheckItem}
      />
    </main>
  );
}

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 1.8rem;

  img {
    cursor: pointer;
    width: 3rem;
  }
`;
