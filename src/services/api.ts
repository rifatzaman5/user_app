// =============================================
// 🌐 API CALLS - Axios ke saath
// =============================================

import axios from "axios";
import type { User, Post, NewPost } from "../types";  // 👈 YAHAN 'import type' dhyaan se

// Base URL - Free fake API
const API_URL = "https://jsonplaceholder.typicode.com";

// Axios instance
const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

// =============================================
// 👤 USER APIs
// =============================================

export const fetchUsers = async (): Promise<User[]> => {
  const response = await api.get<User[]>("/users");
  return response.data;
};

export const fetchUserById = async (id: number): Promise<User> => {
  const response = await api.get<User>(`/users/${id}`);
  return response.data;
};

export const deleteUserApi = async (id: number): Promise<void> => {
  await api.delete(`/users/${id}`);
};

// =============================================
// 📝 POST APIs
// =============================================

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await api.get<Post[]>("/posts");
  return response.data;
};

export const fetchUserPosts = async (userId: number): Promise<Post[]> => {
  const response = await api.get<Post[]>(`/posts?userId=${userId}`);
  return response.data;
};

export const createPostApi = async (post: NewPost): Promise<Post> => {
  const response = await api.post<Post>("/posts", post);
  return response.data;
};

export const deletePostApi = async (id: number): Promise<void> => {
  await api.delete(`/posts/${id}`);
};

export default api;