import { Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Home from './pages/Home';
import Watchlist from './pages/Watchlist';
import Library from './pages/Library';
import Friends from './pages/Friends';

import Header from './components/Header';
import Footer from './components/Footer';

import { addToLocalStorage, loadFromLocalStorage } from './lib/localStorage';

export default function App() {
  const [serverMessage, setServerMessage] = useState([]);

  const [watchlist, setWatchlist] = useState(
    loadFromLocalStorage('kulturNotiertWatchlist') ?? []
  );

  useEffect(() => {
    fetch('http://localhost:4000/')
      .then((res) => res.json())
      .then((response) => setServerMessage(response));
  }, []);

  useEffect(() => {
    addToLocalStorage('kulturNotiertWatchlist', watchlist);
  }, [watchlist]);

  function addToWatchlist(newItem) {
    setWatchlist([newItem, ...watchlist]);
  }

  function removeFromWatchlist(itemToBeRemoved) {
    const updatedWatchlist = watchlist.filter(
      (item) => itemToBeRemoved.title !== item.title
    );
    setWatchlist(updatedWatchlist);
  }

  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
          <p>{serverMessage}</p>
        </Route>

        <Route path="/watchlist">
          <Watchlist
            watchlist={watchlist}
            onAddToWatchlist={addToWatchlist}
            onRemoveFromWatchlist={removeFromWatchlist}
          />
        </Route>

        <Route path="/library">
          <Library />
        </Route>

        <Route path="/friends">
          <Friends />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}
