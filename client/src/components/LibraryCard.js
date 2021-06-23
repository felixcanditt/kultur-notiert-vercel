import styled from 'styled-components';

export default function LibraryCard({
  item,
  onSetItemToBeEdited,
  onRemoveFromLibrary
}) {
  return (
    <Card>
      <p>{item.title}</p>
      <p>
        {item.category === 'book' ? 'Buch' : ''}
        {item.category === 'movie' ? 'Film' : ''}
        {item.category === 'series' ? 'Serie' : ''}
        {item.category === 'stage' ? 'Bühne' : ''}
        {item.category === 'exhibition' ? 'Ausstellung' : ''}
        {item.category === 'festival' ? 'Festival' : ''}
      </p>
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
  max-width: 15rem;
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
