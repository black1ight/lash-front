import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authAction, checkAuth, logout } from "./user.actions";
import { IInitialState, IUserState } from "./user.interface";

const initialState: IInitialState = {
  user: null,
  isLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserState>) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(authAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
      })
      .addCase(authAction.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
      })
      .addCase(checkAuth.fulfilled, (state, { payload }) => {
        state.user = payload.user;
      });
  },
});
export const { setUser } = userSlice.actions;
