import "./App.css";
import Login from "./features/auth/Login";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./components/Public";
import RequireAuth from "./features/auth/RequireAuth";
import Welcome from "./features/auth/Welcome";
import UsersList from "./features/users/UserList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public routes */}
        <Route index element={<Public />}></Route>
        <Route path="login" element={<Login />}></Route>

        {/* Protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="welcome" element={<Welcome />}></Route>
          <Route path="usersList" element={<UsersList />}></Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
