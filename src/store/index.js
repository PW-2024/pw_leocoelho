import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  saldo: 1000,
};

const saldoSlice = createSlice({
  name: 'saldo', 
  initialState, 
  reducers: {
    depositar: (state, action) => {
      state.saldo += action.payload;
    },
    levantar: (state, action) => {
      state.saldo -= action.payload;
    },
  },
});

export const { depositar, levantar } = saldoSlice.actions;

const store = configureStore({
  reducer: saldoSlice.reducer,
});

export default store;
