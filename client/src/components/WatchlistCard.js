import styled from 'styled-components';

import WatchlistCardDetails from './WatchlistCardDetails';
import WatchlistCheckbox from './WatchlistCheckbox';

export default function WatchlistCard({
  item,
  index,
  onCheckItem,
  onRemoveFromWatchlist
}) {
  return (
    <Card key={index}>
      <p>{item.title}</p>
      <WatchlistCardDetails item={item} />
      <WatchlistCheckbox item={item} index={index} onCheckItem={onCheckItem} />
      <button onClick={() => onRemoveFromWatchlist(item, index)}>
        löschen
      </button>
    </Card>
  );
}

const Card = styled.div`
  max-width: 15rem;
  border-radius: 0.4rem;
  padding: 1.2rem 1rem;
  background: hotpink;
  color: ivory;

  display: grid;
  gap: 0.8rem;

  input {
    transform: scale(1.5);
    margin-right: 0.7rem;
  }

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
