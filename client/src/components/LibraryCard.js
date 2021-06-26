import styled from 'styled-components';

import { displayButtonText } from '../lib/displayCard';
import { displayCategory } from '../lib/displayCard';

import starIcon from '../images/star.svg';
import checkIcon from '../images/002-check-1.svg';
import editIcon from '../images/006-feather.svg';
import removeIcon from '../images/003-remove.svg';

export default function LibraryCard({
  item,
  onCheckItem,
  onSetItemToBeEdited,
  onSetFormOnScreen,
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

  function handleClickOnEdit(clickedItem) {
    onSetItemToBeEdited(clickedItem);
    onSetFormOnScreen(true);
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
        <img src={checkIcon} alt="" onClick={() => onCheckItem(item)} />

        <img src={editIcon} alt="" onClick={() => handleClickOnEdit(item)} />

        <img
          src={removeIcon}
          alt=""
          onClick={() => onRemoveFromLibrary(item)}
        />
      </Buttons>
    </Card>
  );
}

const Card = styled.article`
  width: 85vw;
  max-width: 20rem;

  box-shadow: 0.3rem 0.3rem 0.8rem var(--grey-light);
  border-radius: 1.8rem;
  padding: 2rem;
  background: var(--secondary-lightest);
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

  img {
    cursor: pointer;
    width: 2.2rem;
  }
`;
