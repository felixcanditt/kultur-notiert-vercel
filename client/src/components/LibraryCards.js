import styled from 'styled-components';

import LibraryCard from './LibraryCard';

export default function LibraryCards({
  library,
  onSetItemToBeEdited,
  onRemoveFromLibrary
}) {
  return (
    <Grid>
      {library.map((item) => (
        <LibraryCard
          key={item.id}
          item={item}
          onSetItemToBeEdited={onSetItemToBeEdited}
          onRemoveFromLibrary={onRemoveFromLibrary}
        />
      ))}
    </Grid>
  );
}

const Grid = styled.section`
  margin-top: 3rem;
  display: grid;
  justify-content: center;
  gap: 2rem;
`;
