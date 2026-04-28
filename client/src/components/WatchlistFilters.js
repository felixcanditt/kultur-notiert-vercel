import styled from 'styled-components';

import { categories } from '../lib/categories';

export default function WatchlistFilters({ onSetFilter }) {
  function filterList(selectedFilter) {
    onSetFilter(selectedFilter);
  }
  return (
    <FilterContainer>
      <FilterBox>
        <ul>
          {categories.map((item) => (
            <li>
              <button onClick={() => filterList(item.name)}>{item.text}</button>
            </li>
          ))}
          <li>
            <button onClick={() => filterList('')}>X</button>
          </li>
        </ul>
      </FilterBox>
    </FilterContainer>
  );
}

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const FilterBox = styled.div`
  width: 85vw;
  max-width: 20rem;
  border: 1px black solid;
`;
