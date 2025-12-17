// =============================================
// 🏠 MAIN APP
// =============================================

import { Provider } from "react-redux";
import { store } from "./redux/store";
import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";
import PostList from "./components/PostList";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        {/* Header */}
        <header className="header">
          <h1>🚀 Vite + TypeScript + Redux</h1>
          <p>User Management App - Easy Tarike Se!</p>
        </header>

        {/* Main Content */}
        <main className="main">
          {/* Left - Users */}
          <section className="panel">
            <UserList />
          </section>

          {/* Right - Detail & Posts */}
          <section className="panel">
            <UserDetail />
            <PostList />
          </section>
        </main>

        {/* Footer */}
        <footer className="footer">
          <h3>📚 Is App Mein Seekha:</h3>
          <div className="concepts">
            <div className="concept">
              <h4>🌐 REST API</h4>
              <p>GET, POST, DELETE with Axios</p>
            </div>
            <div className="concept">
              <h4>📦 Redux Toolkit</h4>
              <p>createSlice, createAsyncThunk</p>
            </div>
            <div className="concept">
              <h4>📝 TypeScript</h4>
              <p>Interfaces, Types, Generics</p>
            </div>
            <div className="concept">
              <h4>⚡ Vite</h4>
              <p>Super Fast Build Tool</p>
            </div>
          </div>
        </footer>
      </div>
    </Provider>
  );
}

export default App;