import styled from 'styled-components';
import { useState } from 'react';

import InputOptions from './InputOptions';

export default function WatchlistForm({ onAddToWatchlist }) {
  const initialFormItem = {
    title: '',
    category: '',
    isWatched: false,
    author: '',
    director: '',
    location: '',
    time: ''
  };

  const [formItem, setFormItem] = useState(initialFormItem);

  function changeItem(event) {
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

  function handleFormSubmit(event) {
    event.preventDefault();
    onAddToWatchlist(formItem);
    setFormItem(initialFormItem);
  }

  return (
    <Form onSubmit={handleFormSubmit}>
      <h3>Neuen Eintrag hinzufügen</h3>

      <label>
        <span>Titel</span>
        <input
          type="text"
          name="title"
          onChange={changeItem}
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
          <option value="film">Film</option>
          <option value="series">Serie</option>
          <option value="stage">Bühne</option>
          <option value="exhibition">Ausstellung</option>
          <option value="festival">Festival</option>
        </select>
      </label>

      <InputOptions formItem={formItem} onChangeItem={changeItem} />

      <button>speichern</button>
    </Form>
  );
}

const Form = styled.form`
  margin: 0 auto;
  max-width: 25rem;

  box-shadow: 0.3rem 0.3rem 0.8rem lightgrey;
  border-radius: 1.8rem;

  background-color: ivory;

  padding: 1.5rem 2rem;

  display: grid;
  gap: 1rem;

  h3 {
    margin-bottom: 0.5rem;
    text-align: center;
  }

  input,
  select {
    margin-left: 0.7rem;
    border-radius: 0.8rem;
    padding: 0.5rem;
  }

  button {
    margin: 0.5rem auto 0;

    cursor: pointer;

    border: none;
    border-radius: 0.4rem;

    background-color: turquoise;

    padding: 0.6rem;

    font-size: 1.25rem;
  }
`;
