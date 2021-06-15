import { Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Home from './pages/Home';
import Watchlist from './pages/Watchlist';
import Library from './pages/Library';
import Friends from './pages/Friends';

import Header from './components/Header';
import Footer from './components/Footer';

// not needed now, maybe later: import { addToLocalStorage, loadFromLocalStorage } from './lib/localStorage';

export default function App() {
  const [serverMessage, setServerMessage] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/')
      .then((response) => response.json())
      .then((response) => setServerMessage(response));
  }, []);

  useEffect(() => {
    fetch('http://localhost:4000/watchlist')
      .then((result) => result.json())
      .then((apiWatchlist) => setWatchlist(apiWatchlist))
      .catch((error) =>
        console.error(
          `Could not fetch watchlist, please check the following error message: `,
          error
        )
      );
  }, []);

  function addToWatchlist(newItem) {
    fetch('http://localhost:4000/watchlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: newItem.title,
        category: newItem.category
      })
    })
      .then((result) => result.json())
      .then((savedItem) => setWatchlist([...watchlist, savedItem]))
      .catch((error) =>
        console.error(
          `Could not add the item ${newItem.title} to watchlist, please check the following error message: `,
          error
        )
      );
  }

  function removeFromWatchlist(itemToBeRemoved) {
    fetch('http://localhost:4000/watchlist/' + itemToBeRemoved._id, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
      .then((result) => result.json())
      .then((response) => {
        if (response.data && response.data._id) {
          const updatedWatchlist = watchlist.filter(
            (item) => item._id !== response.data._id
          );
          setWatchlist(updatedWatchlist);
        } else {
          console.log(`Could not remove the item ${response.data.title}.`);
        }
      });
  }

  /*
  I might need localStorage for offline mode later on

  const [watchlist, setWatchlist] = useState(
    loadFromLocalStorage('kulturNotiertWatchlist') ?? []
  );
  
   useEffect(() => {
    addToLocalStorage('kulturNotiertWatchlist', watchlist);
  }, [watchlist]);
  */

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
