import styled from 'styled-components';

import { categories } from '../lib/categories';

export default function WatchlistFilters({ onSetFilter }) {
  function filterList(selectedFilter) {
    onSetFilter(selectedFilter);
  }
  return (
    <FilterContainer>
      <FilterBox>
        {categories.map((item) => (
          <li>
            <button onClick={() => filterList(item.name)}>{item.text}</button>
          </li>
        ))}
        <li>
          <button onClick={() => filterList('')}>Filter entfernen</button>
        </li>
      </FilterBox>
    </FilterContainer>
  );
}

const FilterContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
`;

const FilterBox = styled.ul`
  width: 85vw;
  max-width: 20rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  button {
    cursor: pointer;
    border-radius: 8px;
    border-width: 1.5px;
    padding: 2px 6px 3px;
    background-color: var(--primary-lightest);
  }
`;
