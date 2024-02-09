import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const itemsSlice = createSlice({
  name: 'elements',
  initialState,
  reducers: {
    addItem: (state, actions) => {
      state.value.push(actions.payload);
    },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, actions) => {
    //   state.value += actions.payload;
    // },
  },
});

// async 'thunk' functions
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    // dispatch(incrementByAmount(amount));
  }, 1000);
};

export const incrementAsync2 = (amount) => {
  return async (dispatch) => {
    setTimeout(() => {
      // dispatch(incrementByAmount(amount));
    }, 1000);
  };
};

export const { addItem } = itemsSlice.actions;
export default itemsSlice.reducer;
