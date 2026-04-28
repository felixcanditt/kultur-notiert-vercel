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
      <FilterBox>
        <div onClick={toggleFilters}>
          <h3>Filter</h3>
          <PlusButton src={closeIcon} alt="Filter anzeigen"></PlusButton>
        </div>
        {showFilters && (
          <div>
            <FilterList>
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
            </FilterList>
            <span onClick={() => filterList('')}>Filter entfernen</span>
          </div>
        )}
      </FilterBox>
    </FilterContainer>
  );
}

const FilterContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
`;

const FilterBox = styled.div`
  width: 85vw;
  max-width: 20rem;

  span {
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const PlusButton = styled.img`
  cursor: pointer;
  width: 1rem;
`;

const FilterList = styled.ul`
  margin-bottom: 0.5rem;
  width: 85vw;
  max-width: 20rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
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
