import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import LibraryFormStars from './LibraryFormStars';
import { ListItem } from '../lib/types';
import { categories } from '../lib/categories';

import closeIcon from '../images/close.svg';

type Props = {
  onSetFormOnScreen: (value: boolean) => void;
  onAddToLibrary: (value: ListItem) => void;
  onEditLibrary: (value: ListItem) => void;
  itemToBeEdited: ListItem | null;
  onSetItemToBeEdited: (value: null) => void;
};

export default function LibraryForm({
  onSetFormOnScreen,
  onAddToLibrary,
  itemToBeEdited,
  onSetItemToBeEdited,
  onEditLibrary,
}: Props) {
  const initialFormItem: ListItem = {
    title: '',
    id: '',
    category: undefined,
    rating: 0,
    notes: '',
    listType: undefined,
  };

  const [formItem, setFormItem] = useState<ListItem>(initialFormItem);

  useEffect(() => {
    if (itemToBeEdited) {
      setFormItem(itemToBeEdited);
    }
  }, [itemToBeEdited]);

  function updateFormItem(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setFormItem({ ...formItem, [inputName]: inputValue });
  }

  function handleFormSubmission(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    itemToBeEdited
      ? onEditLibrary({ ...formItem, listType: 'library' })
      : onAddToLibrary({ ...formItem, id: uuidv4(), listType: 'library' });
    setFormItem(initialFormItem);
    onSetFormOnScreen(false);
  }

  function handleFormCancelation(event: React.MouseEvent<HTMLImageElement>) {
    event.preventDefault();
    if (itemToBeEdited) {
      onSetItemToBeEdited(null);
    }
    setFormItem(initialFormItem);
    onSetFormOnScreen(false);
  }

  function handleFormReset() {
    if (itemToBeEdited) {
      onSetItemToBeEdited(null);
    }
    setFormItem(initialFormItem);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLFormElement>) {
    if (event.key === 'Enter') {
      handleFormSubmission(event);
    }
  }

  return (
    <FormWrapper>
      <Form onKeyDown={handleKeyDown} onSubmit={handleFormSubmission}>
        <CloseButton
          src={closeIcon}
          alt="Fenster schliessen"
          onClick={handleFormCancelation}
        ></CloseButton>
        <h3>{itemToBeEdited ? 'Eintrag bearbeiten' : 'Eintrag hinzufügen'}</h3>

        <label>
          <span>Titel</span>
          <input
            type="text"
            name="title"
            onChange={updateFormItem}
            value={formItem.title}
          />
        </label>

        <label>
          <span>Kategorie</span>
          <select
            name="category"
            onChange={updateFormItem}
            value={formItem.category}
          >
            <option value=""></option>

            {categories.map((category) => (
              <option key={category.name} value={category.name}>
                {category.text}
              </option>
            ))}
          </select>
        </label>

        <LibraryFormStars formItem={formItem} onSetFormItem={setFormItem} />

        <Notes>
          <label htmlFor="notes">Notizen</label>
          <textarea
            id="notes"
            name="notes"
            onChange={updateFormItem}
            value={formItem.notes}
          ></textarea>
        </Notes>

        <Buttons>
          <button type="reset" onClick={handleFormReset}>
            zurücksetzen
          </button>
          <button>speichern</button>
        </Buttons>
      </Form>
    </FormWrapper>
  );
}

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

const Form = styled.form`
  width: 90vw;
  max-width: 25rem;

  box-shadow:
    var(--primary-dark) 0px 12.5px 25px -5px,
    var(--primary-lightest) 0px 7.5px 15px -7.5px,
    var(--grey) 0px -2px 6px 0px inset;

  border-radius: 1.8rem;

  background-color: var(--primary-lightest);

  padding: 2rem;

  display: grid;
  gap: 0.9rem;

  h3 {
    margin-bottom: 0.7rem;
    text-align: center;
  }

  span {
    margin-right: 0.7rem;
  }

  input,
  select,
  textarea {
    border-radius: 0.8rem;
    background: white;
    padding: 0.5rem;
  }

  input {
    width: 11rem;
  }
`;

const CloseButton = styled.img`
  cursor: pointer;
  margin: -0.3rem 0 -0.2rem 0;
  justify-self: end;
  width: 1rem;
`;

const Notes = styled.div`
  display: grid;
  gap: 0.5rem;

  textarea {
    resize: none;
    height: 5rem;
  }
`;

const Buttons = styled.div`
  margin-top: 0.6rem;
  display: flex;
  justify-content: space-around;

  button {
    cursor: pointer;

    border: none;
    border-radius: 0.4rem;

    background-color: var(--secondary);

    padding: 0.6rem;
  }
`;
