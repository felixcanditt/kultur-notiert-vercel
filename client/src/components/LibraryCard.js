import styled from 'styled-components';

import CardCategory from './CardCategory';

import starIcon from '../images/star.svg';
import checkmarkIcon from '../images/checkmark-checked.svg';
import pencilIcon from '../images/pencil.svg';
import removeIcon from '../images/remove.svg';

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
        alt="Eintrag mit Sternen bewerten"
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

      {item.category && <CardCategory item={item} />}

      {item.rating !== 0 && (
        <Stars>
          {displayStar(1)}
          {displayStar(2)}
          {displayStar(3)}
          {displayStar(4)}
          {displayStar(5)}
        </Stars>
      )}

      {item.notes && (
        <p>
          Meine Notizen: <br />
          {item.notes}
        </p>
      )}

      <Buttons>
        <img
          src={checkmarkIcon}
          alt="Haekchen setzen"
          onClick={() => onCheckItem(item)}
        />

        <img
          src={pencilIcon}
          alt="Eintrag bearbeiten"
          onClick={() => handleClickOnEdit(item)}
        />

        <img
          src={removeIcon}
          alt="Eintrag entfernen"
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
