import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardEncuesta from './pages/DashboardEncuesta';
import EncuestaCreada from './pages/EncuestaCreada';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/crear" element={<DashboardEncuesta />} />
        <Route path="/encuesta-creada" element={<EncuestaCreada />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;