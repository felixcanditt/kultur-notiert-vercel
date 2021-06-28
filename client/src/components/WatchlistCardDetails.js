import styled from 'styled-components';

import { displayCategory } from '../lib/displayCard';

import bookIcon from '../images/book.svg';
import cameraIcon from '../images/camera.svg';
import televisionIcon from '../images/television.svg';
import curtainIcon from '../images/curtain.svg';
import venusIcon from '../images/venus-de-milo.svg';
import confettiIcon from '../images/confetti.svg';

export default function WatchlistCardDetails({ item }) {
  function displayDetails() {
    if (item.category === 'book') {
      return <>{item.author ? <p>von {item.author}</p> : ''}</>;
    } else if (item.category === 'movie') {
      return (
        <>
          {item.director ? <p>von {item.director}</p> : ''}
          {item.location ? <p>gibt's hier: {item.location}</p> : ''}
        </>
      );
    } else if (item.category === 'series') {
      return <>{item.location ? <p>gibt's hier: {item.location}</p> : ''}</>;
    } else if (item.category === 'exhibition') {
      return (
        <>
          {item.location ? <p>Ort: {item.location}</p> : ''}
          {item.time ? <p>Läuft bis: {item.time}</p> : ''}
        </>
      );
    } else if (item.category === 'stage' || 'festival') {
      return (
        <>
          {item.location ? <p>Ort: {item.location}</p> : ''}
          {item.time ? <p>Wann? {item.time}</p> : ''}
        </>
      );
    }
  }

  return (
    <>
      <CategoryWrapper>
        {item.category === 'book' && (
          <img src={bookIcon} alt="Buch als Zeichen für die Kategorie Buch" />
        )}
        {item.category === 'movie' && (
          <img
            src={cameraIcon}
            alt="Kamera als Zeichen für die Kategorie Film"
          />
        )}
        {item.category === 'series' && (
          <img
            src={televisionIcon}
            alt="Fernseher als Zeichen für die Kategorie Serie"
          />
        )}
        {item.category === 'stage' && (
          <img
            src={curtainIcon}
            alt="Vorhang als Zeichen für die Kategorie Bühne"
          />
        )}
        {item.category === 'exhibition' && (
          <img
            src={venusIcon}
            alt="Statue als Zeichen für die Kategorie Ausstellung"
          />
        )}
        {item.category === 'festival' && (
          <img
            src={confettiIcon}
            alt="Statue als Zeichen für die Kategorie Ausstellung"
          />
        )}
        <span>{displayCategory(item.category)}</span>
      </CategoryWrapper>

      {displayDetails()}
    </>
  );
}

const CategoryWrapper = styled.div`
  xborder-radius: 0.4rem;
  xbackground-color: var(--secondary);
  xpadding: 0.6rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 2.2rem;
  }
`;
