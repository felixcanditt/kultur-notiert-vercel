import { useState } from 'react';
import styled from 'styled-components';
import { categories } from '../lib/categories';
import closeIcon from '../images/close.svg';

export default function WatchlistFilters({ filter, onSetFilter }) {
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
        <FilterHeader onClick={toggleFilters}>
          <h3>Filter</h3>
          <img
            src={closeIcon}
            alt="Filter anzeigen"
            className={showFilters ? 'showFilters' : ''}
          ></img>
        </FilterHeader>
        {showFilters && (
          <FilterDetails>
            <ul>
              {categories.map((item) => (
                <li>
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
`;

const FilterHeader = styled.div`
  cursor: pointer;
  display: flex;
  gap: 1rem;

  img {
    width: 1rem;
    transition: transform 0.3s ease;
    transform: rotate(-45deg);

    &.showFilters {
      transform: rotate(0deg);
    }
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
