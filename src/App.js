import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './pages/login';
import Admin from './pages/admin/homeAdmin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/admin" element={<Admin/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
