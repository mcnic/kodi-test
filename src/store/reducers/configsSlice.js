import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {},
};

export const configsSlice = createSlice({
  name: 'elements',
  initialState,
  reducers: {
    addConfig: (state, actions) => {
      // console.log('addConfig', state, actions);
      const { id, config } = actions.payload;
      state.value[id] = config;
    },
    loadAllConfig: (state, actions) => {
      // console.log('loadConfig', state, actions);
      state.value = actions.payload;
    },
  },
});

export const { addConfig, loadAllConfig } = configsSlice.actions;
export default configsSlice.reducer;
