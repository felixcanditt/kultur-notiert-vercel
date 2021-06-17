import styled from 'styled-components';
import { useState } from 'react';

export default function WatchlistForm({ onAddToWatchlist }) {
  const initialItem = {
    title: '',
    category: '',
    isWatched: false
  };

  const [item, setItem] = useState(initialItem);

  function changeItem(event) {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setItem({ ...item, [inputName]: inputValue });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    onAddToWatchlist(item);
    setItem(initialItem);
  }

  // function testFunction() {
  //   if (item.category === 'film') {
  //     return (
  //       <>
  //         <label htmlFor="where">wo?</label>
  //         <input
  //           type="text"
  //           id="where"
  //           name="where"
  //           onChange={changeItem}
  //           value={item.where}
  //         />
  //       </>
  //     );
  //   } else if (item.category === 'series') {
  //     return;
  //   }
  // }

  return (
    <Form onSubmit={handleFormSubmit}>
      <h3>Neuen Eintrag hinzufügen</h3>

      <label htmlFor="title">Titel</label>
      <input
        type="text"
        id="title"
        name="title"
        onChange={changeItem}
        value={item.title}
      />

      {/* <label htmlFor="category">Kategorie</label>
      <select
        name="category"
        id="category"
        onChange={changeItem}
        value={item.category}
      >
        <option value=""></option>
      
        <option value="film">Film</option>
        <option value="series">Serie</option>
        <option value="book">Buch</option>
      </select> */}

      {/* {testFunction()} */}

      {/* {clubs &&
          clubs.map((club) => (
            <option key={club._id} value={club.name}>
              {club.name}
            </option>
          ))} */}

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

  button {
    margin: 0.7rem auto 0;

    cursor: pointer;

    border: none;
    border-radius: 0.4rem;

    background-color: turquoise;

    padding: 0.6rem;

    font-size: 1.25rem;
  }
`;
