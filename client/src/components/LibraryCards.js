import styled from 'styled-components';

export default function LibraryCards({
  library,
  onSetItemToBeEdited,
  onRemoveFromLibrary
}) {
  return (
    <Grid>
      {library.map((item, index) => (
        <Card key={index}>
          <p>{item.title}</p>
          <p>{item.category}</p>
          <button onClick={(event) => onSetItemToBeEdited(item)}>
            bearbeiten
          </button>
          <button onClick={() => onRemoveFromLibrary(item)}>löschen</button>
        </Card>
      ))}
    </Grid>
  );
}

const Grid = styled.section`
  margin-top: 4rem;
  display: grid;
  justify-content: center;
  gap: 2rem;
`;

const Card = styled.article`
  max-width: 15rem;
  box-shadow: 0.3rem 0.3rem 0.8rem lightgrey;
  border-radius: 0.4rem;
  padding: 1.2rem 1rem;
  background: hotpink;
  color: ivory;

  display: grid;
  gap: 0.8rem;

  input {
    transform: scale(1.5);
    margin-right: 0.7rem;
  }

  button {
    justify-self: end;
    cursor: pointer;
    border: none;
    border-radius: 0.3rem;
    background: turquoise;
    padding: 0.2rem 0.3rem;
    font-size: 1.25rem;
  }
`;
