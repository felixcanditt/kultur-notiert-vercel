import styled from 'styled-components';

import displayCategory from '../lib/displayCard';

import starIcon from '../images/star.svg';

export default function LibraryCard({
  item,
  onSetItemToBeEdited,
  onRemoveFromLibrary
}) {
  function displayStar(positionOfClickedStar) {
    return (
      <img
        src={starIcon}
        alt="Stern zeigt die Bewertung an"
        style={
          item.rating >= positionOfClickedStar
            ? { opacity: '100%' }
            : { opacity: '25%' }
        }
      />
    );
  }

  return (
    <Card>
      {item.title ? <p>{item.title}</p> : <p>Ohne Titel</p>}

      {displayCategory(item.category)}

      {item.rating ? (
        <Stars>
          {displayStar(1)}
          {displayStar(2)}
          {displayStar(3)}
          {displayStar(4)}
          {displayStar(5)}
        </Stars>
      ) : (
        ''
      )}

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
  padding: 2rem;
  background: hotpink;
  color: ivory;

  display: grid;
  gap: 2rem;

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

const Stars = styled.div`
  display: flex;
  gap: 1rem;

  img {
    width: 2rem;
    color: white;
  }
`;
