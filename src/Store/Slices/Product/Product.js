import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
  'fetchProducts',
  async (API, {rejectWithValue}) => {
    const response = await fetch(API);
    if (response.status === 200) return await response.json();
    else return rejectWithValue('No more products');
  },
);

const productSlice = createSlice({
  name: 'productSlice',
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  reducers: {
    removeAllProducts(state, action) {
      return {
        isLoading: false,
        data: [],
        isError: false,
      };
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isError = false;
      state.data = [...state.data, ...action.payload];
      state.isLoading = false;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
      console.log(action.payload);
    });
  },
});

export default productSlice.reducer;
export const {removeAllProducts} = productSlice.actions;
