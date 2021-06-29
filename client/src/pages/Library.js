import { useState, useEffect } from 'react';
import styled from 'styled-components';

import LibraryForm from '../components/LibraryForm';
import LibraryCards from '../components/LibraryCards';

import plusIcon from '../images/plus.svg';

export default function Library({
  onSetPage,
  isPage,
  library,
  onAddToLibrary,
  itemToBeEdited,
  onSetItemToBeEdited,
  onEditLibrary,
  onRemoveFromLibrary,
  onCheckItem
}) {
  useEffect(() => {
    onSetPage('library');
  }, []);

  const [formOnScreen, setFormOnScreen] = useState(false);

  return (
    <main>
      <TitleWrapper>
        <h2>Meine Sammlung</h2>
        <img
          src={plusIcon}
          alt="Neuen Eintrag zu Meiner Sammlung hinzufügen"
          onClick={() => setFormOnScreen(true)}
        />
      </TitleWrapper>

      {formOnScreen && (
        <LibraryForm
          onSetFormOnScreen={setFormOnScreen}
          onAddToLibrary={onAddToLibrary}
          itemToBeEdited={itemToBeEdited}
          onSetItemToBeEdited={onSetItemToBeEdited}
          onEditLibrary={onEditLibrary}
        />
      )}

      <LibraryCards
        isPage={isPage}
        library={library}
        onSetItemToBeEdited={onSetItemToBeEdited}
        onSetFormOnScreen={setFormOnScreen}
        onRemoveFromLibrary={onRemoveFromLibrary}
        onCheckItem={onCheckItem}
      />
    </main>
  );
}

const TitleWrapper = styled.div`
  display: grid;
  place-items: center;
  gap: 0.5rem;

  h2 {
    margin: 0;
  }

  img {
    cursor: pointer;
    width: 3rem;
  }
`;
