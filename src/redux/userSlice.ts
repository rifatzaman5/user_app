// =============================================
// 👤 USER SLICE
// =============================================

import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,       // 👈 yahan "type" add kiya
} from "@reduxjs/toolkit";
import type { User, UserState } from "../types";
import { fetchUsers, deleteUserApi } from "../services/api";

// =============================================
// 🔄 ASYNC THUNKS - API calls
// =============================================

export const getUsers = createAsyncThunk<User[], void>(
  "users/getUsers",
  async () => {
    const users = await fetchUsers();
    return users;
  }
);

export const deleteUser = createAsyncThunk<number, number>(
  "users/deleteUser",
  async (userId) => {
    await deleteUserApi(userId);
    return userId;
  }
);

// =============================================
// 📦 INITIAL STATE
// =============================================

const initialState: UserState = {
  users: [],
  selectedUser: null,
  status: "idle",
  error: null,
};

// =============================================
// 🍕 SLICE
// =============================================

const userSlice = createSlice({
  name: "users",
  initialState,

  reducers: {
    selectUser: (state, action: PayloadAction<User | null>) => {
      state.selectedUser = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Kuch galat ho gaya";
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter((u) => u.id !== action.payload);
        if (state.selectedUser?.id === action.payload) {
          state.selectedUser = null;
        }
      });
  },
});

export const { selectUser, clearError } = userSlice.actions;
export default userSlice.reducer;