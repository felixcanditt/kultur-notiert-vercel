import { useState, useEffect } from "react";
import styled from "styled-components";

import WatchlistForm from "../components/WatchlistForm";
import WatchlistCards from "../components/WatchlistCards";

import plusIcon from "../images/plus.svg";

export default function Watchlist({
  onSetCurrentPage,
  currentPage,
  watchlist,
  onAddToWatchlist,
  itemToBeEdited,
  onSetItemToBeEdited,
  onEditWatchlist,
  onRemoveFromWatchlist,
  onCheckItem,
}) {
  useEffect(() => {
    onSetCurrentPage("watchlist");
    onSetItemToBeEdited("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [formOnScreen, setFormOnScreen] = useState(false);
  const [selectedFilter, setFilter] = useState("showAll");

  function handleClickOnFilter(selectedCategory) {
    setFilter(selectedCategory);
  }

  return (
    <main>
      <TitleWrapper>
        <h2>Merkliste</h2>
        <img
          src={plusIcon}
          alt="Neuen Eintrag zur Merkliste hinzufügen"
          onClick={() => setFormOnScreen(true)}
        />
      </TitleWrapper>

      {formOnScreen && (
        <WatchlistForm
          onSetFormOnScreen={setFormOnScreen}
          onAddToWatchlist={onAddToWatchlist}
          itemToBeEdited={itemToBeEdited}
          onSetItemToBeEdited={onSetItemToBeEdited}
          onEditWatchlist={onEditWatchlist}
        />
      )}

      <button onClick={() => handleClickOnFilter("showAll")}>
        alle anzeigen
      </button>
      <button onClick={() => handleClickOnFilter("book")}>Buch</button>
      <button onClick={() => handleClickOnFilter("movie")}>Film</button>
      <button onClick={() => handleClickOnFilter("series")}>Serie</button>
      <button onClick={() => handleClickOnFilter("music")}>Musik</button>
      <button onClick={() => handleClickOnFilter("stage")}>Bühne</button>
      <button onClick={() => handleClickOnFilter("exhibition")}>
        Ausstellung
      </button>
      <button onClick={() => handleClickOnFilter("festival")}>Festival</button>
      <button onClick={() => handleClickOnFilter("miscellaneous")}>
        Sonstiges
      </button>

      <WatchlistCards
        currentPage={currentPage}
        watchlist={watchlist}
        selectedFilter={selectedFilter}
        onSetItemToBeEdited={onSetItemToBeEdited}
        onSetFormOnScreen={setFormOnScreen}
        onRemoveFromWatchlist={onRemoveFromWatchlist}
        onCheckItem={onCheckItem}
      />
    </main>
  );
}

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 1.8rem;

  img {
    cursor: pointer;
    width: 3rem;
  }
`;
