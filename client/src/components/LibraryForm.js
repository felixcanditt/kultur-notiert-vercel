import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import star from '../images/star.svg';

export default function LibraryForm({
  onAddToLibrary,
  itemToBeEdited,
  onSetItemToBeEdited,
  onEditLibrary
}) {
  const initialFormItem = {
    title: '',
    category: '',
    rating: '',
    notes: '',
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

  function rateFormItem(clickedStars) {
    formItem.rating === clickedStars
      ? setFormItem({ ...formItem, rating: '' })
      : setFormItem({ ...formItem, rating: clickedStars });
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
          onChange={updateFormItem}
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

      <Stars>
        <img
          src={star}
          alt="this is a star for rating purposes"
          onClick={() => rateFormItem(1)}
          style={
            formItem.rating >= 1 ? { opacity: '100%' } : { opacity: '25%' }
          }
        />
        <img
          src={star}
          alt="this is a star for rating purposes"
          onClick={() => rateFormItem(2)}
          style={
            formItem.rating >= 2 ? { opacity: '100%' } : { opacity: '25%' }
          }
        />
        <img
          src={star}
          alt="this is a star for rating purposes"
          onClick={() => rateFormItem(3)}
          style={
            formItem.rating >= 3 ? { opacity: '100%' } : { opacity: '25%' }
          }
        />
        <img
          src={star}
          alt="this is a star for rating purposes"
          onClick={() => rateFormItem(4)}
          style={
            formItem.rating >= 4 ? { opacity: '100%' } : { opacity: '25%' }
          }
        />
        <img
          src={star}
          alt="this is a star for rating purposes"
          onClick={() => rateFormItem(5)}
          style={
            formItem.rating >= 5 ? { opacity: '100%' } : { opacity: '25%' }
          }
        />
        {/* <Star2 src={star} alt="this is a star for rating purposes" />
        <Star3 src={star} alt="this is a star for rating purposes" />
        <Star4 src={star} alt="this is a star for rating purposes" />
        <Star5 src={star} alt="this is a star for rating purposes" /> */}
      </Stars>

      <label htmlFor="notes">Notizen</label>
      <textarea
        id="notes"
        name="notes"
        onChange={updateFormItem}
        value={formItem.notes}
      ></textarea>

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
  gap: 1rem;

  h3 {
    margin-bottom: 0.5rem;
    text-align: center;
  }

  input,
  select,
  textarea {
    border-radius: 0.8rem;
    padding: 0.5rem;
  }

  textarea {
    resize: none;
    height: 5.35rem;
  }

  span {
    margin-right: 0.7rem;
  }
`;

const Stars = styled.div`
  margin: 1.5rem;
  display: flex;
  gap: 1rem;
`;

// const Star1 = styled.img`
//   width: 2rem;
//   cursor: pointer;
//   opacity: 25%;
//   opacity: ${{ stars } === 1 ? '100%' : '25%'};
// `;

// const Star2 = styled.img`
//   width: 2rem;
//   cursor: pointer;
//   opacity: 25%;
// `;

// const Star3 = styled.img`
//   width: 2rem;
//   cursor: pointer;
//   opacity: 25%;
// `;

// const Star4 = styled.img`
//   width: 2rem;
//   cursor: pointer;
//   opacity: 25%;
// `;

// const Star5 = styled.img`
//   width: 2rem;
//   cursor: pointer;
//   opacity: 100%;
// `;

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
