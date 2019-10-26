import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Screens/Home/Home';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronRight, faChevronLeft , faSearch} from '@fortawesome/free-solid-svg-icons';

library.add(faChevronLeft, faChevronRight, faSearch);

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
