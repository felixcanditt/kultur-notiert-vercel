import styled from 'styled-components';

export default function LibraryCard({
  item,
  onSetItemToBeEdited,
  onRemoveFromLibrary
}) {
  return (
    <Card>
      <p>{item.title}</p>

      {item.category === 'book' ? <p>Buch</p> : ''}
      {item.category === 'movie' ? <p>Film</p> : ''}
      {item.category === 'series' ? <p>Serie</p> : ''}
      {item.category === 'stage' ? <p>Bühne</p> : ''}
      {item.category === 'exhibition' ? <p>Ausstellung</p> : ''}
      {item.category === 'festival' ? <p>Festival</p> : ''}

      {item.rating ? <p>Meine Bewertung: {item.rating}/5 Sterne</p> : ''}
      {item.notes ? (
        <p>
          Meine Notizen: <br />
          {item.notes}
        </p>
      ) : (
        ''
      )}

      <button onClick={(event) => onSetItemToBeEdited(item)}>bearbeiten</button>
      <button onClick={() => onRemoveFromLibrary(item)}>löschen</button>
    </Card>
  );
}

const Card = styled.article`
  box-shadow: 0.3rem 0.3rem 0.8rem lightgrey;
  border-radius: 0.4rem;
  padding: 1.2rem 1rem;
  background: hotpink;
  color: ivory;

  display: grid;
  gap: 0.8rem;

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
