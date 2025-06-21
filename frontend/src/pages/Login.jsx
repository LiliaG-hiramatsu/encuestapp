import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import apiUrl from '../../apiUrl';

function Login() {
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();

   async function handleLogin() {
    let data = {
      email: email.current.value,
      password: password.current.value
    }
    console.log(data)
    try {
      await axios.post(apiUrl+'auth/login', data);
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  }

  /*
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar correo
    if (!email.endsWith('@gmail.com')) {
      setError('El correo debe terminar en @gmail.com');
      return;
    }

    // Validar contraseña
    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    // Si todo está bien
    setError('');
    console.log('Login exitoso con:', email, password);

    // Redirigir o hacer login real aquí
  };
  */
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-semibold mb-4 text-center">Iniciar sesión</h2>
        {/*
        {error && (
          <div className="mb-4 text-red-600 text-sm text-center">
            {error}
          </div>
        )}
        */}
        <form>
          <input
            className="w-full p-2 mb-4 border rounded"
            ref={email}
            type="text"
            name="email"
            id="email"
            placeholder="Correo @gmail.com"
            /*onChange={(e) => setEmail(e.target.value)}*/
          />
          <input
            className="w-full p-2 mb-4 border rounded"
            ref={password}
            type="password"
            name="password"
            id="password"
            placeholder="Contraseña"
            /*onChange={(e) => setPassword(e.target.value)}*/
          />
          <input
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            type="button"
            value="Entrar"
            onClick={handleLogin}
          />
        </form>

        <button
          className="w-full bg-gray-400 text-white p-2 rounded hover:bg-gray-500 mt-2"
          type="button"
          onClick={() => navigate('/')}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}

export default Login;
