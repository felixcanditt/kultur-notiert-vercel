import styled from 'styled-components';

import displayCategory from '../lib/displayCard';

export default function LibraryCard({
  item,
  onSetItemToBeEdited,
  onRemoveFromLibrary
}) {
  return (
    <Card>
      {item.title ? <p>{item.title}</p> : <p>Ohne Titel</p>}

      {displayCategory(item.category)}

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
