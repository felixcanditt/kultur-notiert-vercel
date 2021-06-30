import bookIcon from '../images/book.svg';
import cameraIcon from '../images/camera.svg';
import televisionIcon from '../images/television.svg';
import curtainIcon from '../images/curtain.svg';
import venusIcon from '../images/venus-de-milo.svg';
import confettiIcon from '../images/confetti.svg';

export function displayCategoryIcon(savedCategory) {
  let categoryIcon;
  let categoryAlt;

  if (savedCategory === 'book') {
    categoryIcon = bookIcon;
    categoryAlt = 'Kategorie Buch';
  } else if (savedCategory === 'movie') {
    categoryIcon = cameraIcon;
    categoryAlt = 'Kategorie Film';
  } else if (savedCategory === 'series') {
    categoryIcon = televisionIcon;
    categoryAlt = 'Kategorie Serie';
  } else if (savedCategory === 'stage') {
    categoryIcon = curtainIcon;
    categoryAlt = 'Kategorie Bühne';
  } else if (savedCategory === 'exhibition') {
    categoryIcon = venusIcon;
    categoryAlt = 'Kategorie Ausstellung';
  } else if (savedCategory === 'festival') {
    categoryIcon = confettiIcon;
    categoryAlt = 'Kategorie Ausstellung';
  }

  return <img src={categoryIcon} alt={categoryAlt} />;
}

export function displayCategory(savedCategory) {
  const getText = {
    book: 'Buch',
    movie: 'Film',
    series: 'Serie',
    stage: 'Bühne',
    exhibition: 'Ausstellung',
    festival: 'Festival',
    noSavedData: ''
  };

  return getText[savedCategory] ? (
    <p>{getText[savedCategory]}</p>
  ) : (
    getText['noSavedData']
  );
}

export function displayDetails(savedItem) {
  if (savedItem.category === 'book') {
    return <>{savedItem.author ? <p>von {savedItem.author}</p> : ''}</>;
  } else if (savedItem.category === 'movie') {
    return (
      <>
        {savedItem.director ? <p>von {savedItem.director}</p> : ''}
        {savedItem.location ? <p>gibt's hier: {savedItem.location}</p> : ''}
      </>
    );
  } else if (savedItem.category === 'series') {
    return (
      <>{savedItem.location ? <p>gibt's hier: {savedItem.location}</p> : ''}</>
    );
  } else if (savedItem.category === 'exhibition') {
    return (
      <>
        {savedItem.location ? <p>Ort: {savedItem.location}</p> : ''}
        {savedItem.time ? <p>Läuft bis: {savedItem.time}</p> : ''}
      </>
    );
  } else if (savedItem.category === 'stage' || 'festival') {
    return (
      <>
        {savedItem.location ? <p>Ort: {savedItem.location}</p> : ''}
        {savedItem.time ? <p>Wann? {savedItem.time}</p> : ''}
      </>
    );
  }
}
