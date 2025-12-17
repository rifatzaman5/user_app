# 🚀 User Management App

A modern, full-featured user management application built with React, TypeScript, Redux Toolkit, and Vite. This app demonstrates best practices for state management, API integration, and component architecture.

## ✨ Features

- **👥 User Management**

  - View list of users with their details
  - Select a user to view detailed information
  - Delete users from the list
  - Real-time user data fetching from JSONPlaceholder API

- **📝 Post Management**

  - View posts for selected users
  - Create new posts
  - Delete posts
  - Load all posts or filter by user

- **🎨 Modern UI/UX**

  - Beautiful gradient design
  - Responsive layout
  - Loading states and error handling
  - Smooth animations and transitions

- **⚡ State Management**
  - Redux Toolkit for centralized state
  - Async thunks for API calls
  - Type-safe Redux hooks

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.0
- **Language**: TypeScript 5.9.3
- **State Management**: Redux Toolkit 2.11.2
- **HTTP Client**: Axios 1.13.2
- **Build Tool**: Vite 7.2.4
- **Styling**: CSS3 with modern gradients

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/rifatzaman5/user_app.git
cd user-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
user-app/
├── src/
│   ├── components/       # React components
│   │   ├── UserList.tsx  # User list component
│   │   ├── UserDetail.tsx # User detail view
│   │   ├── PostList.tsx  # Post list component
│   │   └── Loading.tsx   # Loading spinner
│   ├── redux/            # Redux store and slices
│   │   ├── store.ts      # Redux store configuration
│   │   ├── userSlice.ts  # User state management
│   │   ├── postSlice.ts  # Post state management
│   │   └── hooks.ts      # Typed Redux hooks
│   ├── services/         # API services
│   │   └── api.ts        # Axios API calls
│   ├── types/            # TypeScript types
│   │   └── index.ts      # Type definitions
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Entry point
├── public/               # Static assets
└── package.json          # Dependencies
```

## 🎯 Key Concepts Demonstrated

### 🌐 REST API Integration

- GET, POST, DELETE operations using Axios
- Error handling and loading states
- API calls to JSONPlaceholder (https://jsonplaceholder.typicode.com)

### 📦 Redux Toolkit

- `createSlice` for reducers and actions
- `createAsyncThunk` for async operations
- Typed hooks (`useAppDispatch`, `useAppSelector`)

### 📝 TypeScript

- Interfaces and types for data models
- Type-safe Redux state
- Generic types for API calls

### ⚡ Vite

- Fast HMR (Hot Module Replacement)
- Optimized production builds
- Modern ES modules

## 🎨 UI Features

- **Dark Theme**: Beautiful gradient background
- **Responsive Design**: Works on desktop and mobile
- **Interactive Cards**: Hover effects and animations
- **Loading States**: Spinner animations during API calls
- **Error Handling**: User-friendly error messages

## 📱 Usage

1. **View Users**: The app automatically loads users on startup
2. **Select User**: Click on any user card to view details and posts
3. **Create Post**: Fill in the form and click "Add Post"
4. **Delete Items**: Click the delete button (🗑️) on any user or post
5. **Load All Posts**: Click "Load All" to fetch all posts

## 🔗 API Endpoints Used

This app uses the [JSONPlaceholder](https://jsonplaceholder.typicode.com) API:

- `GET /users` - Fetch all users
- `GET /users/:id` - Fetch user by ID
- `DELETE /users/:id` - Delete user
- `GET /posts` - Fetch all posts
- `GET /posts?userId=:id` - Fetch posts by user
- `POST /posts` - Create new post
- `DELETE /posts/:id` - Delete post

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Rifat Zaman**

- GitHub: [@rifatzaman5](https://github.com/rifatzaman5)
- Repository: [user_app](https://github.com/rifatzaman5/user_app)

---

Made with ❤️ using React, TypeScript, and Redux Toolkit
