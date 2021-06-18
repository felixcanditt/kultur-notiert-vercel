export default function InputOptions({ formItem, onChangeItem }) {
  function renderOptions() {
    if (formItem.category === 'book') {
      return (
        <label>
          <span>Autor*in</span>
          <input
            type="text"
            name="author"
            onChange={onChangeItem}
            value={formItem.author}
          />
        </label>
      );
    } else if (formItem.category === 'movie') {
      return (
        <>
          <label>
            <span>Regisseur*in</span>
            <input
              type="text"
              name="director"
              onChange={onChangeItem}
              value={formItem.director}
            />
          </label>
          <label>
            <span>Wo ansehen?</span>
            <input
              type="text"
              name="location"
              onChange={onChangeItem}
              value={formItem.location}
            />
          </label>
        </>
      );
    } else if (formItem.category === 'series') {
      return (
        <label>
          <span>Wo ansehen?</span>
          <input
            type="text"
            name="location"
            onChange={onChangeItem}
            value={formItem.location}
          />
        </label>
      );
    } else if (formItem.category === 'exhibition') {
      return (
        <>
          <label>
            <span>Wo?</span>
            <input
              type="text"
              name="location"
              onChange={onChangeItem}
              value={formItem.location}
            />
          </label>
          <label>
            <span>Läuft bis:</span>
            <input
              type="text"
              name="time"
              onChange={onChangeItem}
              value={formItem.time}
            />
          </label>
        </>
      );
    } else if (
      formItem.category === 'stage' ||
      formItem.category === 'festival'
    ) {
      return (
        <>
          <label>
            <span>Wo?</span>
            <input
              type="text"
              name="location"
              onChange={onChangeItem}
              value={formItem.location}
            />
          </label>
          <label>
            <span>Wann?</span>
            <input
              type="text"
              name="time"
              onChange={onChangeItem}
              value={formItem.time}
            />
          </label>
        </>
      );
    }
  }

  return <>{renderOptions()}</>;
}
