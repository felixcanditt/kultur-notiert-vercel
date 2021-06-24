import styled from 'styled-components';

import { displayCategory } from '../lib/displayCard';

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
      {item.title ? <h4>{item.title}</h4> : <h4>Ohne Titel</h4>}

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
      <Buttons>
        <button onClick={(event) => onSetItemToBeEdited(item)}>
          bearbeiten
        </button>
        <button onClick={() => onRemoveFromLibrary(item)}>löschen</button>
      </Buttons>
    </Card>
  );
}

const Card = styled.article`
  width: 20rem;
  box-shadow: 0.3rem 0.3rem 0.8rem lightgrey;
  border-radius: 0.4rem;
  padding: 2rem;
  background: hotpink;
  color: ivory;

  display: grid;
  gap: 0.5rem;

  h4 {
    margin-bottom: 0.3rem;
  }
`;

const Stars = styled.div`
  margin: 1rem 0;
  display: flex;
  gap: 1rem;

  img {
    width: 2.2rem;
  }
`;

const Buttons = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;

  button {
    cursor: pointer;
    border: none;
    border-radius: 0.4rem;
    background: turquoise;
    padding: 0.2rem 0.3rem;
    font-size: 1rem;
  }
`;
