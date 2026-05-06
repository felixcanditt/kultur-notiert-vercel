import styled from 'styled-components';

import Card from './Card.tsx';

export default function LibraryCards({
  currentPage,
  library,
  filter,
  onSetItemToBeEdited,
  onSetFormOnScreen,
  onRemoveFromLibrary,
  onCheckItem,
}) {
  const filteredList = library.filter((item) => item.category === filter);

  function listToBeRendered() {
    const libraryNewest = library.slice(0, 2);
    let relevantList;
    currentPage === 'library'
      ? filter
        ? (relevantList = filteredList)
        : (relevantList = library)
      : (relevantList = libraryNewest);
    return relevantList;
  }

  return (
    <Grid>
      {listToBeRendered().map((item) => (
        <Card
          key={item.id}
          item={item}
          onSetItemToBeEdited={onSetItemToBeEdited}
          deleteItem={onRemoveFromLibrary}
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
