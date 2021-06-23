import displayCategory from '../lib/displayCard';

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
      {displayCategory(item.category)}
      {displayDetails()}
    </>
  );
}
