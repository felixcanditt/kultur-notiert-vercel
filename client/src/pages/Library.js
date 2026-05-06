import { useState, useEffect } from 'react';
import styled from 'styled-components';

import LibraryForm from '../components/LibraryForm.tsx';
import Filters from '../components/Filters';
import LibraryCards from '../components/LibraryCards.tsx';

import plusIcon from '../images/plus.svg';

export default function Library({
  onSetCurrentPage,
  currentPage,
  library,
  onAddToLibrary,
  itemToBeEdited,
  onSetItemToBeEdited,
  onEditLibrary,
  onRemoveFromLibrary,
  onCheckItem,
}) {
  useEffect(() => {
    onSetCurrentPage('library');
    onSetItemToBeEdited('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [formOnScreen, setFormOnScreen] = useState(false);
  const [filter, setFilter] = useState('');

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

      <Filters filter={filter} onSetFilter={setFilter}></Filters>

      <LibraryCards
        currentPage={currentPage}
        library={library}
        filter={filter}
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
  gap: 0.8rem;

  img {
    cursor: pointer;
    width: 3rem;
  }
`;
