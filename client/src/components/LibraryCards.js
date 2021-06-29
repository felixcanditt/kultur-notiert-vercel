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
  const libraryNewest = library.slice(0, 2);

  function displayCards() {
    if (isPage === 'library') {
      return (
        <>
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
        </>
      );
    } else {
      return (
        <>
          {libraryNewest.map((item) => (
            <LibraryCard
              key={item.id}
              item={item}
              onSetItemToBeEdited={onSetItemToBeEdited}
              onRemoveFromLibrary={onRemoveFromLibrary}
              onCheckItem={onCheckItem}
              onSetFormOnScreen={onSetFormOnScreen}
            />
          ))}
        </>
      );
    }
  }

  return <Grid>{displayCards()}</Grid>;
}

const Grid = styled.section`
  margin-top: 3rem;
  display: grid;
  justify-content: center;
  gap: 3rem;
`;
