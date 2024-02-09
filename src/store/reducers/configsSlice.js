import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {},
};

export const configsSlice = createSlice({
  name: 'elements',
  initialState,
  reducers: {
    addConfig: (state, actions) => {
      const { id, config } = actions.payload;
      state.value[id] = config;
    },
    // increment: (state) => {
    //   state.value += 1;
    // },
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

export const { addConfig } = configsSlice.actions;
export default configsSlice.reducer;
