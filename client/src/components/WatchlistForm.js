import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import WatchlistFormOptions from './WatchlistFormOptions';

import closeIcon from '../images/close.svg';

export default function WatchlistForm({
  onSetFormOnScreen,
  onAddToWatchlist,
  itemToBeEdited,
  onSetItemToBeEdited,
  onEditWatchlist
}) {
  const initialFormItem = {
    title: '',
    id: '',
    category: '',
    author: '',
    director: '',
    location: '',
    time: ''
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

  function selectCategory(event) {
    const selectedCategory = event.target.value;

    const itemWithCategory = {
      title: formItem.title,
      id: formItem.id,
      category: selectedCategory,
      author: '',
      director: '',
      location: '',
      time: ''
    };

    setFormItem(itemWithCategory);
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    itemToBeEdited
      ? onEditWatchlist(formItem)
      : onAddToWatchlist({ ...formItem, id: uuidv4() });
    setFormItem(initialFormItem);
    onSetFormOnScreen(false);
  }

  function handleFormCancelation(event) {
    event.preventDefault();
    if (itemToBeEdited) {
      onSetItemToBeEdited();
    }
    setFormItem(initialFormItem);
    onSetFormOnScreen(false);
  }

  function handleFormReset() {
    if (itemToBeEdited) {
      onSetItemToBeEdited();
    }
    setFormItem(initialFormItem);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      handleFormSubmission(event);
    }
  }

  return (
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
          onChange={selectCategory}
          value={formItem.category}
        >
          <option value=""></option>
          <option value="book">Buch</option>
          <option value="movie">Film</option>
          <option value="series">Serie</option>
          <option value="stage">Bühne</option>
          <option value="exhibition">Ausstellung</option>
          <option value="festival">Festival</option>
        </select>
      </label>

      <WatchlistFormOptions
        formItem={formItem}
        onUpdateFormItem={updateFormItem}
      />

      <Buttons>
        <button type="reset" onClick={handleFormReset}>
          zurücksetzen
        </button>
        <button>speichern</button>
      </Buttons>
    </Form>
  );
}

const Form = styled.form`
  width: 90vw;
  max-width: 25rem;

  box-shadow: 0.3rem 0.3rem 0.8rem var(--grey);
  border-radius: 1.8rem;

  background-color: var(--primary-lightest);

  padding: 2rem;

  display: grid;
  gap: 0.7rem;

  h3 {
    margin-bottom: 0.5rem;
    text-align: center;
  }

  span {
    margin-right: 0.7rem;
  }

  input,
  select {
    border-radius: 0.8rem;
    background: white;
    padding: 0.5rem;
  }

  input {
    width: 11rem;
  }
`;

const CloseButton = styled.img`
  justify-self: end;
  width: 1rem;
`;

const Buttons = styled.div`
  margin-top: 0.5rem;
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
