// =============================================
// 👤 USER DETAIL COMPONENT
// =============================================

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectUser } from "../redux/userSlice";
import { clearPosts } from "../redux/postSlice";

const UserDetail = () => {
  const dispatch = useAppDispatch();
  const { selectedUser } = useAppSelector((state) => state.users);

  // Close detail
  const handleClose = () => {
    dispatch(selectUser(null));
    dispatch(clearPosts());
  };

  // Agar koi user select nahi
  if (!selectedUser) {
    return (
      <div className="user-detail empty">
        <p>👆 Kisi user pe click karo</p>
      </div>
    );
  }

  return (
    <div className="user-detail">
      <button className="btn-close" onClick={handleClose}>
        ✕
      </button>

      <div className="detail-header">
        <div className="avatar-large">{selectedUser.name.charAt(0)}</div>
        <div>
          <h2>{selectedUser.name}</h2>
          <p className="username">@{selectedUser.username}</p>
        </div>
      </div>

      <div className="detail-body">
        <div className="info-row">
          <span>📧</span>
          <div>
            <label>Email</label>
            <p>{selectedUser.email}</p>
          </div>
        </div>

        <div className="info-row">
          <span>📱</span>
          <div>
            <label>Phone</label>
            <p>{selectedUser.phone}</p>
          </div>
        </div>

        <div className="info-row">
          <span>🌐</span>
          <div>
            <label>Website</label>
            <p>{selectedUser.website}</p>
          </div>
        </div>

        <div className="info-row">
          <span>📍</span>
          <div>
            <label>Address</label>
            <p>
              {selectedUser.address.street}, {selectedUser.address.city}
            </p>
          </div>
        </div>

        <div className="info-row">
          <span>🏢</span>
          <div>
            <label>Company</label>
            <p>{selectedUser.company.name}</p>
            <small>{selectedUser.company.catchPhrase}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;