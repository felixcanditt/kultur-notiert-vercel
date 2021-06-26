import { useState } from 'react';
import styled from 'styled-components';

import LibraryForm from '../components/LibraryForm';
import LibraryCards from '../components/LibraryCards';

export default function Library({
  library,
  onAddToLibrary,
  itemToBeEdited,
  onSetItemToBeEdited,
  onEditLibrary,
  onRemoveFromLibrary,
  onCheckItem
}) {
  const [formOnScreen, setFormOnScreen] = useState(false);

  return (
    <main>
      <TitleWrapper>
        <h2>Meine Sammlung</h2>
        <button onClick={() => setFormOnScreen(true)}>+</button>
      </TitleWrapper>

      {formOnScreen && (
        <FormWrapper>
          <LibraryForm
            onSetFormOnScreen={setFormOnScreen}
            onAddToLibrary={onAddToLibrary}
            itemToBeEdited={itemToBeEdited}
            onSetItemToBeEdited={onSetItemToBeEdited}
            onEditLibrary={onEditLibrary}
          />
        </FormWrapper>
      )}

      <LibraryCards
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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 0.5rem;

  h2 {
    margin: 0;
  }

  button {
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    border: none;
    background: var(--secondary-dark);
    color: var(--primary-lightest);
    font-size: 2rem;
  }
`;

const FormWrapper = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(0.6rem);
`;
