import styled from 'styled-components';

import WatchlistCardDetails from './WatchlistCardDetails';

import checkmarkIcon from '../images/checkmark-unchecked.svg';
import pencilIcon from '../images/pencil.svg';
import removeIcon from '../images/remove.svg';

export default function WatchlistCard({
  item,
  onCheckItem,
  onSetItemToBeEdited,
  onSetFormOnScreen,
  onRemoveFromWatchlist
}) {
  function handleClickOnEdit(clickedItem) {
    onSetItemToBeEdited(clickedItem);
    onSetFormOnScreen(true);
  }

  return (
    <Card>
      {item.title ? <h4>{item.title}</h4> : <h4>Ohne Titel</h4>}
      <WatchlistCardDetails item={item} />
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
          onClick={() => onRemoveFromWatchlist(item)}
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
  gap: 0.2rem;

  h4 {
    margin-bottom: 0.7rem;
  }
`;

const Buttons = styled.div`
  margin-top: 1.1rem;
  display: flex;
  justify-content: space-around;

  img {
    cursor: pointer;
    width: 2.1rem;
  }
`;
