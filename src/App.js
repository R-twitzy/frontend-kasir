import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

// Login
import Login from './pages/login';

// Admin
import Admin from './pages/admin/homeAdmin';
import MejaAdmin from "./pages/admin/mejaAdmin";
import MenuAdmin from "./pages/admin/menuAdmin";
import UserAdmin from "./pages/admin/userAdmin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/login" element={<Login/>} />

        {/* Admin */}
        <Route path="/admin" element={<Admin/>} />
        <Route path="/admin/meja" element={<MejaAdmin/>} />
        <Route path="/admin/menu" element={<MenuAdmin/>} />
        <Route path="/admin/user" element={<UserAdmin/>} />

        {/*  */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
