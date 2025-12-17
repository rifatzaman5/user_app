// =============================================
// 📝 POST LIST COMPONENT
// =============================================

import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getPosts, createPost, deletePost, clearPosts } from "../redux/postSlice";
import type { NewPost } from "../types";
import Loading from "./Loading";

const PostList = () => {
  const dispatch = useAppDispatch();
  
  // Redux state
  const { posts, status, error } = useAppSelector((state) => state.posts);
  const { selectedUser } = useAppSelector((state) => state.users);

  // Local state - form ke liye
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sab posts load karo
  const handleLoadAll = () => {
    dispatch(getPosts());
  };

  // Posts clear karo
  const handleClear = () => {
    dispatch(clearPosts());
  };

  // Nayi post submit karo
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !body.trim()) {
      alert("Title aur body dono likho!");
      return;
    }

    const newPost: NewPost = {
      userId: selectedUser?.id || 1,
      title: title.trim(),
      body: body.trim(),
    };

    setIsSubmitting(true);
    await dispatch(createPost(newPost));
    setIsSubmitting(false);

    // Form clear
    setTitle("");
    setBody("");
  };

  // Post delete karo
  const handleDeletePost = (postId: number) => {
    dispatch(deletePost(postId));
  };

  return (
    <div className="post-list">
      {/* Header */}
      <div className="section-header">
        <h2>
          📝 Posts
          {selectedUser && ` - ${selectedUser.name}`}
          {posts.length > 0 && ` (${posts.length})`}
        </h2>
        <div className="btn-group">
          <button onClick={handleLoadAll} className="btn-small">
            📥 Load All
          </button>
          <button onClick={handleClear} className="btn-small">
            🗑️ Clear
          </button>
        </div>
      </div>

      {/* New Post Form */}
      <form onSubmit={handleSubmit} className="post-form">
        <h3>✏️ Nayi Post</h3>
        <input
          type="text"
          placeholder="Title likho..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content likho..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={3}
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "⏳ Adding..." : "➕ Add Post"}
        </button>
      </form>

      {/* Loading */}
      {status === "loading" && <Loading message="Posts load ho rahe hain..." />}

      {/* Error */}
      {status === "failed" && (
        <div className="error-box">
          <p>❌ {error}</p>
        </div>
      )}

      {/* Empty State */}
      {status === "succeeded" && posts.length === 0 && (
        <p className="empty-msg">
          Koi post nahi. User pe click karo ya "Load All" dabao.
        </p>
      )}

      {/* Posts */}
      {posts.length > 0 && (
        <div className="posts-container">
          {posts.slice(0, 10).map((post) => (
            <div key={post.id} className="post-card">
              <div className="post-content">
                <h4>{post.title}</h4>
                <p>{post.body}</p>
                <span className="post-meta">
                  Post #{post.id} | User #{post.userId}
                </span>
              </div>
              <button
                className="btn-delete-small"
                onClick={() => handleDeletePost(post.id)}
              >
                🗑️
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostList;