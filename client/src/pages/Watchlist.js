import { useState, useEffect } from 'react';
import styled from 'styled-components';

import WatchlistForm from '../components/WatchlistForm';
import WatchlistFilters from '../components/WatchlistFilters';
import WatchlistCards from '../components/WatchlistCards';

import plusIcon from '../images/plus.svg';

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
}) {
  useEffect(() => {
    onSetCurrentPage('watchlist');
    onSetItemToBeEdited('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [formOnScreen, setFormOnScreen] = useState(false);
  const [filter, setFilter] = useState('');

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

      <WatchlistFilters
        filter={filter}
        onSetFilter={setFilter}
      ></WatchlistFilters>

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
