export default function WatchlistCardDetails({ item }) {
  function displayDetails() {
    if (item.category === 'book') {
      return (
        <>
          <p>Buch</p>
          {item.author ? <p>von {item.author}</p> : ''}
        </>
      );
    } else if (item.category === 'movie') {
      return (
        <>
          <p>Film</p>
          {item.director ? <p>von {item.director}</p> : ''}
          {item.location ? <p>gibt's hier: {item.location}</p> : ''}
        </>
      );
    } else if (item.category === 'series') {
      return (
        <>
          <p>Serie</p>
          {item.location ? <p>gibt's hier: {item.location}</p> : ''}
        </>
      );
    } else if (item.category === 'stage') {
      return (
        <>
          <p>Bühne</p>
          {item.location ? <p>Ort: {item.location}</p> : ''}
          {item.time ? <p>Wann? {item.time}</p> : ''}
        </>
      );
    } else if (item.category === 'exhibition') {
      return (
        <>
          <p>Ausstellung</p>
          {item.location ? <p>Ort: {item.location}</p> : ''}
          {item.time ? <p>Läuft bis: {item.time}</p> : ''}
        </>
      );
    } else if (item.category === 'festival') {
      return (
        <>
          <p>Festival</p>
          {item.location ? <p>Ort: {item.location}</p> : ''}
          {item.time ? <p>Wann? {item.time}</p> : ''}
        </>
      );
    }
  }

  return <>{displayDetails()}</>;
}
