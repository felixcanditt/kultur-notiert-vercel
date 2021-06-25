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

export function displayButtonText(savedCategory) {
  const getText = {
    book: 'gelesen',
    movie: 'gesehen',
    series: 'gesehen',
    stage: 'gesehen',
    exhibition: 'besucht',
    festival: 'besucht',
    noSavedData: 'gesehen'
  };

  return getText[savedCategory]
    ? getText[savedCategory]
    : getText['noSavedData'];
}
