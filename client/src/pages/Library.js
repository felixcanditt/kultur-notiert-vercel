import LibraryForm from '../components/LibraryForm';
import LibraryCards from '../components/LibraryCards';

export default function Library({
  library,
  onAddToLibrary,
  itemToBeEdited,
  onSetItemToBeEdited,
  onEditLibrary,
  onRemoveFromLibrary
}) {
  return (
    <main>
      <h2>Meine Sammlung</h2>
      <LibraryForm
        onAddToLibrary={onAddToLibrary}
        itemToBeEdited={itemToBeEdited}
        onEditLibrary={onEditLibrary}
      />

      <LibraryCards
        library={library}
        onSetItemToBeEdited={onSetItemToBeEdited}
        onRemoveFromLibrary={onRemoveFromLibrary}
      />
    </main>
  );
}
