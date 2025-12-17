// =============================================
// 👥 USER LIST COMPONENT
// =============================================

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getUsers, deleteUser, selectUser } from "../redux/userSlice";
import { getUserPosts, clearPosts } from "../redux/postSlice";
import type { User } from "../types";
import type { RootState } from "../redux/store";
import Loading from "./Loading";

const UserList = () => {
  const dispatch = useAppDispatch();
  
  // Redux state select karo
  const { users, status, error } = useAppSelector((state: RootState) => state.users);

  // Component mount hone pe users fetch karo
  useEffect(() => {
    if (status === "idle") {
      dispatch(getUsers());
    }
  }, [dispatch, status]);

  // User pe click
  const handleUserClick = (user: User) => {
    dispatch(selectUser(user));
    dispatch(getUserPosts(user.id));
  };

  // User delete
  const handleDelete = (e: React.MouseEvent, userId: number) => {
    e.stopPropagation();
    if (confirm("Delete karna hai?")) {
      dispatch(deleteUser(userId));
      dispatch(clearPosts());
    }
  };

  // Refresh
  const handleRefresh = () => {
    dispatch(getUsers());
  };

  // Loading
  if (status === "loading") {
    return <Loading message="Users load ho rahe hain..." />;
  }

  // Error
  if (status === "failed") {
    return (
      <div className="error-box">
        <p>❌ {error}</p>
        <button onClick={handleRefresh}>Retry</button>
      </div>
    );
  }

  return (
    <div className="user-list">
      <div className="section-header">
        <h2>👥 Users ({users.length})</h2>
        <button onClick={handleRefresh} className="btn-small">
          🔄 Refresh
        </button>
      </div>

      <div className="users-container">
        {users.map((user: User) => (
          <div
            key={user.id}
            className="user-card"
            onClick={() => handleUserClick(user)}
          >
            <div className="avatar">{user.name.charAt(0)}</div>
            <div className="user-info">
              <h3>{user.name}</h3>
              <p>@{user.username}</p>
              <p>📧 {user.email}</p>
              <p>🏢 {user.company.name}</p>
            </div>
            <button
              className="btn-delete"
              onClick={(e) => handleDelete(e, user.id)}
            >
              🗑️
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;