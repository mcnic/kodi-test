import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: (state, actions) => {
      state.value.push(actions.payload);
    },
    loadItems: (state, actions) => {
      state.value = actions.payload;
    },
  },
});

export const { addItem, loadItems } = itemsSlice.actions;
export default itemsSlice.reducer;
