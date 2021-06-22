import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function LibraryForm({
  onAddToLibrary,
  itemToBeEdited,
  onSetItemToBeEdited,
  onEditLibrary
}) {
  const initialFormItem = {
    title: '',
    category: '',
    isWatched: true
  };

  const [formItem, setFormItem] = useState(initialFormItem);

  useEffect(() => {
    if (itemToBeEdited) {
      setFormItem(itemToBeEdited);
    }
  }, [itemToBeEdited]);

  function updateFormItem(event) {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setFormItem({ ...formItem, [inputName]: inputValue });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    itemToBeEdited
      ? onEditLibrary(formItem)
      : onAddToLibrary({ ...formItem, id: uuidv4() });
    setFormItem(initialFormItem);
  }

  function handleFormCancelation() {
    if (itemToBeEdited) {
      onSetItemToBeEdited();
    }
    setFormItem(initialFormItem);
  }

  return (
    <Form onSubmit={handleFormSubmission}>
      <h3>Neuen Eintrag hinzufügen</h3>

      <label htmlFor="title">Titel</label>
      <input
        type="text"
        id="title"
        name="title"
        onChange={updateFormItem}
        value={formItem.title}
      />

      <label htmlFor="category">Kategorie</label>
      <input
        type="text"
        name="category"
        onChange={updateFormItem}
        value={formItem.category}
      />
      <Buttons>
        <button type="reset" onClick={handleFormCancelation}>
          abbrechen
        </button>
        <button>speichern</button>
      </Buttons>
    </Form>
  );
}

const Form = styled.form`
  margin: 0 auto;
  max-width: 25rem;

  box-shadow: 0.3rem 0.3rem 0.8rem lightgrey;
  border-radius: 1.8rem;

  background-color: ivory;

  padding: 1.5rem;

  display: grid;
  gap: 0.5rem;

  h3 {
    margin-bottom: 1rem;
    text-align: center;
  }

  label {
    padding-left: 0.4rem;
  }

  input {
    margin-bottom: 0.3rem;
    border-radius: 0.8rem;
    padding: 0.5rem;
  }
`;

const Buttons = styled.div`
  margin-top: 0.7rem;
  display: flex;
  justify-content: space-evenly;

  button {
    cursor: pointer;

    border: none;
    border-radius: 0.4rem;

    background-color: turquoise;

    padding: 0.6rem;

    font-size: 1.25rem;
  }
`;
