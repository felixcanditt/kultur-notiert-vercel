import { useState } from 'react';
import styled from 'styled-components';
import { categories } from '../lib/categories';
import closeIcon from '../images/close.svg';

export default function Filters({ filter, onSetFilter }) {
  const [showFilters, setShowFilters] = useState(false);

  function toggleFilters() {
    setShowFilters((prev) => !prev);
  }

  function filterList(selectedFilter) {
    onSetFilter(selectedFilter);
  }

  return (
    <FilterContainer>
      <FilterContent>
        <FilterHeader
          onClick={toggleFilters}
          className={showFilters ? 'showFilters' : ''}
        >
          <h4>Filter</h4>
          <img src={closeIcon} alt="Filter anzeigen"></img>
        </FilterHeader>
        {showFilters && (
          <FilterDetails>
            <ul>
              {categories.map((item) => (
                <li key={item.name}>
                  <FilterButton
                    className={filter === item.name ? 'active' : ''}
                    onClick={() => filterList(item.name)}
                  >
                    {item.text}
                  </FilterButton>
                </li>
              ))}
            </ul>
            <span onClick={() => filterList('')}>Filter entfernen</span>
          </FilterDetails>
        )}
      </FilterContent>
    </FilterContainer>
  );
}

const FilterContainer = styled.div`
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
`;

const FilterContent = styled.div`
  width: 85vw;
  max-width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const FilterHeader = styled.div`
  cursor: pointer;
  border: 1.5px black solid;
  border-radius: 8px;
  background-color: var(--grey-lightest);
  padding: 2px 6px 3px;
  display: flex;
  gap: 1rem;

  &.showFilters {
    img {
      transform: rotate(0deg);
    }
  }

  &:hover {
    background-color: var(--grey-light);
  }

  img {
    width: 1rem;
    transition: transform 0.3s ease;
    transform: rotate(-45deg);
  }
`;

const FilterDetails = styled.div`
  margin-top: 1rem;
  ul {
    margin-bottom: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  span {
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const FilterButton = styled.button`
  cursor: pointer;
  border-radius: 8px;
  border-width: 1.5px;
  padding: 2px 6px 3px;
  background-color: var(--grey-lightest);

  &.active {
    background-color: var(--primary-light) !important;
  }

  &:hover {
    background-color: var(--grey-light);
  }
`;
