import styled from 'styled-components';

export default function WatchlistForm() {
  return (
    <FormStyled>
      <h3>Neuen Eintrag hinzufügen</h3>

      <label htmlFor="title">Titel</label>
      <input type="text" name="title" />

      <label htmlFor="category">Kategorie</label>
      <input type="text" name="category" />

      <button>speichern</button>
    </FormStyled>
  );
}

const FormStyled = styled.form`
  margin: 0 auto;
  width: 25rem;

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
    margin: 0.7rem auto 0 auto;

    cursor: pointer;

    border: none;
    border-radius: 0.4rem;

    background-color: turquoise;

    padding: 0.6rem;

    font-size: 1.25rem;
  }
`;
