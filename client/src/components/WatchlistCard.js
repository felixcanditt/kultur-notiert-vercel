import styled from 'styled-components';

import WatchlistCardDetails from './WatchlistCardDetails';

import { displayButtonText } from '../lib/displayCard';

export default function WatchlistCard({
  item,
  onCheckItem,
  onSetItemToBeEdited,
  onRemoveFromWatchlist
}) {
  return (
    <Card>
      {item.title ? <h4>{item.title}</h4> : <h4>Ohne Titel</h4>}

      <WatchlistCardDetails item={item} />

      <button onClick={() => onCheckItem(item)}>
        {displayButtonText(item.category)}
      </button>
      <button onClick={() => onSetItemToBeEdited(item)}>bearbeiten</button>
      <button onClick={() => onRemoveFromWatchlist(item)}>löschen</button>
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
