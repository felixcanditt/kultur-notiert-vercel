import styled from 'styled-components';

import LibraryCard from './LibraryCard';

export default function LibraryCards({
  library,
  onSetItemToBeEdited,
  onSetFormOnScreen,
  onRemoveFromLibrary,
  onCheckItem
}) {
  return (
    <Grid>
      {library.map((item) => (
        <LibraryCard
          key={item.id}
          item={item}
          onSetItemToBeEdited={onSetItemToBeEdited}
          onRemoveFromLibrary={onRemoveFromLibrary}
          onCheckItem={onCheckItem}
          onSetFormOnScreen={onSetFormOnScreen}
        />
      ))}
    </Grid>
  );
}

const Grid = styled.section`
  margin-top: 3rem;
  display: grid;
  justify-content: center;
  gap: 3rem;
`;
