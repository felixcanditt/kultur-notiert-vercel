import styled from 'styled-components';

import { CategoryName } from '../lib/types';
import { displayCategoryIcon, displayCategory } from '../lib/displayCard';

type Props = {
  category: CategoryName;
};

export default function CardCategory({ category }: Props) {
  return (
    <CategoryContainer>
      <CategoryPill>
        {displayCategoryIcon(category)}
        <span>{displayCategory(category)}</span>
      </CategoryPill>
    </CategoryContainer>
  );
}
const CategoryContainer = styled.div`
  margin-bottom: 0.8rem;
  display: flex;
`;
const CategoryPill = styled.div`
  border-radius: 1.1rem;
  background-color: var(--secondary);
  padding: 0.5rem 0.7rem;

  display: flex;
  align-items: center;
  gap: 0.6rem;

  img {
    width: 2.4rem;
  }
`;
