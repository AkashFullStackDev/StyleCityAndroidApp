import {createSlice} from '@reduxjs/toolkit';
const singleProductSlice = createSlice({
  name: 'singleProductSlice',
  initialState: {
    isAvailable: false,
    data: {},
  },
  reducers: {
    addSingleProduct(state, action) {
      state.isAvailable = true; 
      state.data = action.payload;
    },
    deleteSingleProduct(state, action) {
      state.isAvailable = false;
      state.data = {};
    },
  },
});
export default singleProductSlice.reducer;
export const {addSingleProduct, deleteSingleProduct} =
  singleProductSlice.actions;
