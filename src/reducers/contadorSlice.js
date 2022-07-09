import { createSlice } from "@reduxjs/toolkit";


export const contadorSlice = createSlice({
  name: "contador",
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },

    increment_5: (state,action) => {
      state.value += action.payload;
    },
    decremented_5: (state,action) => {
      state.value -= action.payload;
    },
    reset:(state)=>{
        state.value = 0;
    },
    default:(state)=>{
        state.value = state
    }
  },
});


export const { incremented, decremented, increment_5,decremented_5,reset} = contadorSlice.actions;
export const selectCount = (state) => state.contador.value;
export default contadorSlice.reducer;
