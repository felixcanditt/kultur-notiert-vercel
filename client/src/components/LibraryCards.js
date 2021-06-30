import styled from 'styled-components';

import LibraryCard from './LibraryCard';

export default function LibraryCards({
  isPage,
  library,
  onSetItemToBeEdited,
  onSetFormOnScreen,
  onRemoveFromLibrary,
  onCheckItem
}) {
  function listToBeRendered() {
    const libraryNewest = library.slice(0, 2);
    let relevantList;
    isPage === 'library'
      ? (relevantList = library)
      : (relevantList = libraryNewest);
    return relevantList;
  }

  return (
    <Grid>
      {listToBeRendered().map((item) => (
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
