import styled from 'styled-components';
import { displayCategoryIcon } from '../lib/displayCard';

export default function Filters({ currentFilter, onSetFilter }) {
  function displayFilterButton(clickedButton) {
    function handleClickOnButton(selectedFilter) {
      currentFilter === selectedFilter
        ? onSetFilter('noFilter')
        : onSetFilter(selectedFilter);
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
    <OuterBox>
      <InnerBox>
        {displayFilterButton('book')}
        {displayFilterButton('movie')}
        {displayFilterButton('series')}
        {displayFilterButton('music')}
        {displayFilterButton('stage')}
        {displayFilterButton('exhibition')}
        {displayFilterButton('festival')}
        {displayFilterButton('miscellaneous')}
      </InnerBox>
    </OuterBox>
  );
}

const OuterBox = styled.div`
  margin: 2.2rem 1.1rem 0;
  display: flex;
  justify-content: center;
`;

const InnerBox = styled.div`
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
