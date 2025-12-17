// =============================================
// 📝 POST SLICE
// =============================================

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { Post, PostState, NewPost } from "../types";
import { fetchPosts, fetchUserPosts, createPostApi, deletePostApi } from "../services/api";

// =============================================
// 🔄 ASYNC THUNKS
// =============================================

// Sab posts lao
export const getPosts = createAsyncThunk<Post[], void>(
  "posts/getPosts",
  async () => {
    const posts = await fetchPosts();
    return posts;
  }
);

// User ki posts lao
export const getUserPosts = createAsyncThunk<Post[], number>(
  "posts/getUserPosts",
  async (userId) => {
    const posts = await fetchUserPosts(userId);
    return posts;
  }
);

// Nayi post banao
export const createPost = createAsyncThunk<Post, NewPost>(
  "posts/createPost",
  async (newPost) => {
    const post = await createPostApi(newPost);
    return post;
  }
);

// Post delete karo
export const deletePost = createAsyncThunk<number, number>(
  "posts/deletePost",
  async (postId) => {
    await deletePostApi(postId);
    return postId;
  }
);

// =============================================
// 📦 INITIAL STATE
// =============================================

const initialState: PostState = {
  posts: [],
  status: "idle",
  error: null,
};

// =============================================
// 🍕 SLICE
// =============================================

const postSlice = createSlice({
  name: "posts",
  initialState,

  reducers: {
    clearPosts: (state) => {
      state.posts = [];
      state.status = "idle";
    },
  },

  extraReducers: (builder) => {
    builder
      // GET ALL POSTS
      .addCase(getPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Posts nahi mil sake";
      })

      // GET USER POSTS
      .addCase(getUserPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUserPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })

      // CREATE POST
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.unshift(action.payload);
      })

      // DELETE POST
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter((p) => p.id !== action.payload);
      });
  },
});

export const { clearPosts } = postSlice.actions;
export default postSlice.reducer;