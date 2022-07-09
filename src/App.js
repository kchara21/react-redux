import React from 'react';
import {Provider} from "react-redux";
import store from "./store"
import Contador from './components/Contador';

function App() {
  return (
    <Provider store={store}>
        <h1>REDUX</h1>
       <Contador/>
    </Provider>
  )
}

export default App;
