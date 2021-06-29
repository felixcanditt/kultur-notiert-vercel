import styled from 'styled-components';

import { displayCategoryIcon, displayCategory } from '../lib/displayCard';

export default function CardCategory({ item }) {
  return (
    <CategoryContainer>
      <CategoryPill>
        {displayCategoryIcon(item.category)}
        <span>{displayCategory(item.category)}</span>
      </CategoryPill>
    </CategoryContainer>
  );
}
const CategoryContainer = styled.div`
  margin-left: 0.2rem;
  display: flex;
`;
const CategoryPill = styled.div`
  border-radius: 2rem;
  background-color: var(--secondary);
  padding: 0.5rem 0.7rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    width: 2.2rem;
  }
`;
