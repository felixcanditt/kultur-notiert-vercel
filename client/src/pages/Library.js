import { useState } from 'react';

import LibraryForm from '../components/LibraryForm';
import LibraryCards from '../components/LibraryCards';

export default function Library({
  library,
  onAddToLibrary,
  onRemoveFromLibrary,
  onSayHi
}) {
  return (
    <main>
      <h2>Meine Sammlung</h2>
      <button onClick={onSayHi}>+</button>
      <LibraryForm onAddToLibrary={onAddToLibrary} />

      <LibraryCards
        library={library}
        onRemoveFromLibrary={onRemoveFromLibrary}
      />
    </main>
  );
}
