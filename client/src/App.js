import { Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Home from './pages/Home';
import Watchlist from './pages/Watchlist';
import Library from './pages/Library';
import Friends from './pages/Friends';

import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  const [serverMessage, setServerMessage] = useState('');
  const [watchlistItems, setWatchlistItems] = useState([]);
  console.log('these are all stored items', watchlistItems);

  useEffect(() => {
    fetch('http://localhost:4000/')
      .then((res) => res.json())
      .then((response) => setServerMessage(response));
  });

  function addWatchlistItem(newWatchListItem) {
    console.log('item to be added to db', newWatchListItem);
    setWatchlistItems([newWatchListItem, ...watchlistItems]);
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
          <Watchlist onAddWatchlistItem={addWatchlistItem} />
          {watchlistItems.map((item) => (
            <div>
              <p>{item.title}</p>
              <p>{item.category}</p>
            </div>
          ))}
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
