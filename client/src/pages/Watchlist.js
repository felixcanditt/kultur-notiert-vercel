import { useState } from 'react';
import styled from 'styled-components';

import WatchlistForm from '../components/WatchlistForm';
import WatchlistCards from '../components/WatchlistCards';

import plusIcon from '../images/plus.svg';

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
      <TitleWrapper>
        <h2>Merkliste</h2>
        <img src={plusIcon} alt="" onClick={() => setFormOnScreen(true)} />
      </TitleWrapper>

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

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 2rem;

  h2 {
    margin: 0;
  }

  img {
    cursor: pointer;
    width: 3rem;
  }
`;

const FormWrapper = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(0.6rem);
`;
