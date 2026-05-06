import { useState } from 'react';
import styled from 'styled-components';

import { ListItem } from '../lib/types';

import starIcon from '../images/star.svg';
import arrowDownIcon from '../images/arrow-down.svg';
import arrowUpIcon from '../images/arrow-up.svg';

type Props = {
  item: ListItem;
};
export default function LibraryCardDetails({ item }: Props) {
  const [notesOnScreen, setNotesOnScreen] = useState<boolean>(false);

  function displayStar(positionOfClickedStar: number) {
    return (
      <img
        src={starIcon}
        alt="Eintrag mit Sternen bewerten"
        style={
          item.rating && item.rating >= positionOfClickedStar
            ? { opacity: '100%' }
            : { opacity: '25%' }
        }
      />
    );
  }

  return (
    <>
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
        <ShowNotesButton>
          <img
            src={notesOnScreen ? arrowUpIcon : arrowDownIcon}
            alt="Meine Notizen anzeigen"
            onClick={() => setNotesOnScreen(!notesOnScreen)}
          />
          <span>Meine Notizen</span>
        </ShowNotesButton>
      )}

      {item.notes && notesOnScreen && <p>{item.notes}</p>}
    </>
  );
}

const Stars = styled.div`
  margin: 0.2rem 0 1.1rem 0;
  display: flex;
  gap: 1rem;

  img {
    width: 2.2rem;
  }
`;

const ShowNotesButton = styled.div`
  margin: 0.4rem 0;
  display: flex;
  align-items: center;
  gap: 0.7rem;

  img {
    cursor: pointer;
    width: 2rem;
  }
`;
