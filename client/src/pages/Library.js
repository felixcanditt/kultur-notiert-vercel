import LibraryForm from '../components/LibraryForm';
import LibraryCards from '../components/LibraryCards';

export default function Library({
  library,
  onAddToLibrary,
  onRemoveFromLibrary
}) {
  return (
    <main>
      <h2>Meine Sammlung</h2>
      <LibraryForm onAddToLibrary={onAddToLibrary} />

      <LibraryCards
        library={library}
        onRemoveFromLibrary={onRemoveFromLibrary}
      />
    </main>
  );
}
