import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  userData: {
    email: "durdona@gmail.com",
    password: "123123",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      const { email, password } = payload;
      if (
        state.userData.email === email &&
        state.userData.password === password
      ) {
        state.user = { email, password };
      } else {
        state.user = null;
      }
    },
    logOut: (state) => {
      state.user = null;
    },
    signUp: (state, { payload }) => {
      const { userName, email, password } = payload;
      state.userData = { userName, email, password };
    },
  },
});

export const { login, logOut, signUp } = userSlice.actions;
export default userSlice.reducer;
