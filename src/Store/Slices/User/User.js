import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API = 'https://sttylecityapi.onrender.com/api/login';

export const userLogin = createAsyncThunk('userLogin', async userData => {
  const response = await fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: userData.email,
      password: userData.password,
    }),
  });
  let data = {};
  if (response.status === 200) {
    console.log('Saving in Async storage...');
    data = await response.json();
    await AsyncStorage.setItem('userData', JSON.stringify(data));
    return data;
  }
  return await response.json();
});

const deleteUser = async () => {
  await AsyncStorage.removeItem('userData');
  await AsyncStorage.removeItem('userGoogleData');
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    isLoading: false,
    data: {},
    isError: false,
    isLoggedIn: false,
  },
  reducers: {
    logoutUser(state, action) {
      (state.isLoading = false),
        (state.data = {}),
        (state.isError = false),
        (state.isLoggedIn = false);
      deleteUser();
    },
    addUser(state, action) {
      return {
        isLoading: false,
        data: action.payload,
        isError: false,
        isLoggedIn: true,
      };
    },
  },
  extraReducers: builder => {
    builder.addCase(userLogin.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.isError = false;
      state.data = action.payload;
      state.isLoading = false;
      state.isLoggedIn = true;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export default userSlice.reducer;
export const {logoutUser, addUser} = userSlice.actions;
