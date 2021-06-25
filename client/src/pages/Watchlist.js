import { useState } from 'react';
import styled from 'styled-components';

import WatchlistForm from '../components/WatchlistForm';
import WatchlistCards from '../components/WatchlistCards';

export default function Watchlist({
  watchlist,
  onAddToWatchlist,
  itemToBeEdited,
  onSetItemToBeEdited,
  onEditWatchlist,
  onRemoveFromWatchlist,
  onCheckItem
}) {
  const [formOnScreen, setFormOnScreen] = useState(false);

  return (
    <main>
      <Div>
        <h2>Merkliste </h2>
        <button onClick={() => setFormOnScreen(true)}>+</button>
      </Div>

      {formOnScreen && (
        <FormWrapper>
          <WatchlistForm
            onSetFormOnScreen={setFormOnScreen}
            onAddToWatchlist={onAddToWatchlist}
            itemToBeEdited={itemToBeEdited}
            onSetItemToBeEdited={onSetItemToBeEdited}
            onEditWatchlist={onEditWatchlist}
          />
        </FormWrapper>
      )}
      <WatchlistCards
        watchlist={watchlist}
        onSetItemToBeEdited={onSetItemToBeEdited}
        onSetFormOnScreen={setFormOnScreen}
        onRemoveFromWatchlist={onRemoveFromWatchlist}
        onCheckItem={onCheckItem}
      />
    </main>
  );
}

const Div = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  button {
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
  }
`;

const FormWrapper = styled.div`
  backdrop-filter: blur(0.6rem);
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: grid;
  place-items: center;
  z-index: 100;
`;
