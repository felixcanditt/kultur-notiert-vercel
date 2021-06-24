import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import WatchlistFormOptions from './WatchlistFormOptions';

export default function WatchlistForm({
  onAddToWatchlist,
  itemToBeEdited,
  onSetItemToBeEdited,
  onEditWatchlist
}) {
  const initialFormItem = {
    title: '',
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
      category: selectedCategory,
      isWatched: false,
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

  padding: 2rem;

  display: grid;
  gap: 1.5rem;

  h3 {
    margin-bottom: 1rem;
    text-align: center;
  }

  span {
    margin-right: 0.7rem;
  }

  input,
  select {
    border-radius: 0.8rem;
    padding: 0.5rem;
  }

  input {
    width: 11rem;
    border: 1px black solid;
  }

  select {
    background: white;
  }
`;

const Buttons = styled.div`
  margin-top: 1rem;
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
