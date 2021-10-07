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
  const [selectedFilter, setFilter] = useState('showAll');

  function handleClickOnFilter(selectedCategory) {
    selectedFilter === selectedCategory
      ? setFilter('showAll')
      : setFilter(selectedCategory);
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
          <FilterButton
            className={selectedFilter === 'book' ? 'isSelected' : ''}
            onClick={() => handleClickOnFilter('book')}
          >
            {displayCategoryIcon('book')}
          </FilterButton>
          <FilterButton
            className={selectedFilter === 'movie' ? 'isSelected' : ''}
            onClick={() => handleClickOnFilter('movie')}
          >
            {displayCategoryIcon('movie')}
          </FilterButton>
          <FilterButton
            className={selectedFilter === 'series' ? 'isSelected' : ''}
            onClick={() => handleClickOnFilter('series')}
          >
            {displayCategoryIcon('series')}
          </FilterButton>
          <FilterButton
            className={selectedFilter === 'music' ? 'isSelected' : ''}
            onClick={() => handleClickOnFilter('music')}
          >
            {displayCategoryIcon('music')}
          </FilterButton>
          <FilterButton
            className={selectedFilter === 'stage' ? 'isSelected' : ''}
            onClick={() => handleClickOnFilter('stage')}
          >
            {displayCategoryIcon('stage')}
          </FilterButton>
          <FilterButton
            className={selectedFilter === 'exhibition' ? 'isSelected' : ''}
            onClick={() => handleClickOnFilter('exhibition')}
          >
            {displayCategoryIcon('exhibition')}
          </FilterButton>
          <FilterButton
            className={selectedFilter === 'festival' ? 'isSelected' : ''}
            onClick={() => handleClickOnFilter('festival')}
          >
            {displayCategoryIcon('festival')}
          </FilterButton>
          <FilterButton
            className={selectedFilter === 'miscellaneous' ? 'isSelected' : ''}
            onClick={() => handleClickOnFilter('miscellaneous')}
          >
            {displayCategoryIcon('miscellaneous')}
          </FilterButton>
        </Filters>
      </FilterContainer>

      <WatchlistCards
        currentPage={currentPage}
        watchlist={watchlist}
        selectedFilter={selectedFilter}
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
  margin: 3rem 1.1rem 0;
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
  border-radius: 1.1rem;
  background-color: var(--grey-light);
  padding: 0.5rem 0.7rem;

  display: flex;
  align-items: center;

  img {
    width: 2rem;
  }
`;
