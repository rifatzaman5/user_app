// =============================================
// 📝 SAB TYPES YAHAN
// =============================================

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
  };
  address: {
    street: string;
    city: string;
  };
}

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

export type LoadingStatus = "idle" | "loading" | "succeeded" | "failed";

export interface UserState {
  users: User[];
  selectedUser: User | null;
  status: LoadingStatus;
  error: string | null;
}

export interface PostState {
  posts: Post[];
  status: LoadingStatus;
  error: string | null;
}

// Nayi post banane ke liye - id server generate karega
export type NewPost = Omit<Post, "id">;

// User update ke liye - sab optional
export type UpdateUser = Partial<User>;