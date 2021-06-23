export default function displayCategory(savedCategory) {
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
