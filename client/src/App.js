import { useEffect, useState } from 'react';

function App() {
  const [serverMessage, setServerMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/')
      .then((res) => res.json())
      .then((response) => setServerMessage(response));
  });

  return (
    <div className="App">
      <p>{serverMessage}</p>
      <p>Hello World</p>
    </div>
  );
}

export default App;