import { useState, useEffect } from 'react';
import styled from 'styled-components';

import WatchlistForm from '../components/WatchlistForm';
import WatchlistCards from '../components/WatchlistCards';
import { displayCategoryIcon } from '../lib/displayCard';

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
  const [currentFilter, setFilter] = useState('noFilter');

  function displayFilterButton(clickedButton) {
    function handleClickOnButton(selectedFilter) {
      currentFilter === selectedFilter
        ? setFilter('noFilter')
        : setFilter(selectedFilter);
    }
    return (
      <FilterButton
        className={currentFilter === clickedButton ? 'isSelected' : ''}
        onClick={() => handleClickOnButton(clickedButton)}
      >
        {displayCategoryIcon(clickedButton)}
      </FilterButton>
    );
  }

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

      <FilterContainer>
        <Filters>
          {displayFilterButton('book')}
          {displayFilterButton('movie')}
          {displayFilterButton('series')}
          {displayFilterButton('music')}
          {displayFilterButton('stage')}
          {displayFilterButton('exhibition')}
          {displayFilterButton('festival')}
          {displayFilterButton('miscellaneous')}
        </Filters>
      </FilterContainer>

      <WatchlistCards
        currentPage={currentPage}
        watchlist={watchlist}
        currentFilter={currentFilter}
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

const FilterContainer = styled.div`
  margin: 2.2rem 1.1rem 0;
  display: flex;
  justify-content: center;
`;

const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;

  .isSelected {
    background-color: var(--secondary);
  }
`;

const FilterButton = styled.div`
  cursor: pointer;
  border-radius: 1.1rem;
  background-color: var(--grey-light);
  padding: 0.5rem 0.7rem;
  display: flex;
  align-items: center;

  img {
    width: 2rem;
  }
`;
