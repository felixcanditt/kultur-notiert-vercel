import { useState } from 'react';
import styled from 'styled-components';

import uncheckedIcon from '../images/checkmark-unchecked.svg';
import checkedIcon from '../images/checkmark-checked.svg';
import pencilIcon from '../images/pencil.svg';
import removeIcon from '../images/remove.svg';

import CardCategory from './CardCategory';
import { displayWatchlistDetails } from '../lib/displayCard';
import LibraryCardDetails from './LibraryCardDetails';
import { ListItem } from '../lib/types';

type Props = {
  item: ListItem;
  deleteItem: (value: ListItem) => void;
  onCheckItem: (value: ListItem) => void;
  onSetItemToBeEdited: (value: ListItem) => void;
  onSetFormOnScreen: (value: boolean) => void;
};

export default function Card({
  item,
  onCheckItem,
  onSetItemToBeEdited,
  onSetFormOnScreen,
  deleteItem,
}: Props) {
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  function handleClickOnEdit(clickedItem: ListItem) {
    onSetItemToBeEdited(clickedItem);
    onSetFormOnScreen(true);
  }

  return (
    <StyledCard>
      {item.title ? <h4>{item.title}</h4> : <h4>Ohne Titel</h4>}

      {item.category && <CardCategory category={item.category} />}

      {item.listType === 'watchlist' && displayWatchlistDetails(item)}

      {item.listType === 'library' && <LibraryCardDetails item={item} />}

      <Buttons>
        <img
          src={item.listType === 'watchlist' ? uncheckedIcon : checkedIcon}
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
          onClick={() => setShowConfirmDelete(true)}
        />
      </Buttons>

      {showConfirmDelete && (
        <ConfirmDelete>
          <p>Willst du diesen Eintrag löschen?</p>
          <button onClick={() => deleteItem(item)}>Ja</button>
          <button onClick={() => setShowConfirmDelete(false)}>Nein</button>
        </ConfirmDelete>
      )}
    </StyledCard>
  );
}

const StyledCard = styled.div`
  width: 85vw;
  max-width: 20rem;

  box-shadow:
    var(--grey-light) 0px 12.5px 25px -5px,
    var(--secondary-darkest) 0px 7.5px 15px -7.5px,
    var(--grey-light) 0px -2px 6px 0px inset;

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

const ConfirmDelete = styled.div`
  margin-top: 1rem;

  button {
    margin-top: 0.5rem;
    margin-right: 0.5rem;
    cursor: pointer;
    border-radius: 8px;
    border-width: 1.5px;
    padding: 2px 6px 3px;
    background-color: var(--grey-lightest);

    &.active {
      background-color: var(--primary-light) !important;
    }

    &:hover {
      background-color: var(--grey-light);
    }
  }
`;
