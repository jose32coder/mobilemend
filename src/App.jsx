
import './App.css'
import { Dashboard } from './pages/dashboard/Dashboard'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Registro } from './pages/registro/Registro';
import { Login } from './pages/login/Login';

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        {/* Definición de rutas */}
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
  </BrowserRouter>
  )
}

export default App
