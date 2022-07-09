import { configureStore } from "@reduxjs/toolkit";
import {contadorSlice} from "../reducers/contadorSlice";


const store = configureStore({
  reducer:{
    contador:contadorSlice.reducer
  }
});

store.subscribe(() => console.log(store.getState().contador.value));

export default store;
