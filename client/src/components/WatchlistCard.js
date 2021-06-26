import styled from 'styled-components';

import WatchlistCardDetails from './WatchlistCardDetails';

import { displayButtonText } from '../lib/displayCard';

import checkIcon from '../images/001-check.svg';

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
        {/* <button onClick={() => onCheckItem(item)}>
          {displayButtonText(item.category)}
        </button>
        <button onClick={() => handleClickOnEdit(item)}>bearbeiten</button>
        <button onClick={() => onRemoveFromWatchlist(item)}>löschen</button> */}
        <button>
          <img src={checkIcon} alt="" />
        </button>
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

const Buttons = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;

  button {
    cursor: pointer;
    border: none;
    border-radius: 0.4rem;
    xbackground: var(--secondary);
    background: none;
    padding: 0.2rem 0.3rem;
    font-size: 1rem;
  }

  img {
    width: 2.2rem;
  }
`;
