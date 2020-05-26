import React from 'react';

import Header from './components/Header';
import Routes from './routes';

function App() {
  return (
    <div className="App" style={{ padding: 15, }}>
      <Header />
      <Routes />
    </div>
  );
}

export default App;
