import React from 'react';
import logo from './logo.svg';
import CakeContainer from './components/CakeContainer';
import PersoneContainer from './components/personContainer';
import {Provider} from 'react-redux';
import store from './redux/store'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <CakeContainer />
      <br />
      <PersoneContainer />
    </div>
    </Provider>
  );
}

export default App;
