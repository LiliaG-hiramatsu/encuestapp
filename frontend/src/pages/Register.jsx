import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import apiUrl from '../../apiUrl';

function Register() {
  const navigate = useNavigate();

  const nombre = useRef();
  const apellido = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  
  //const [nombre, setNombre] = useState('');
  //const [apellido, setApellido] = useState('');
  //const [correo, setCorreo] = useState('');
  //const [password, setPassword] = useState('');
  //const [confirmPassword, setConfirmPassword] = useState('');
  //const [error, setError] = useState('');

  //const soloLetras = (texto) => /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(texto);

  async function handleSubmit() {
    try {
      let data = {
        nombre: nombre.current.value,
        apellido: apellido.current.value,
        email: email.current.value,
        password: password.current.value,
        confirmPassword: confirmPassword.current.value
      };
      await axios.post(apiUrl+"auth/registro", data);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }
/*
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!soloLetras(nombre) || nombre.length < 3) {
      setError('El nombre debe contener solo letras y más de 3 caracteres');
      return;
    }

    if (!soloLetras(apellido) || apellido.length < 3) {
      setError('El apellido debe contener solo letras y más de 3 caracteres');
      return;
    }

    if (!correo.endsWith('@gmail.com')) {
      setError('El correo debe terminar en @gmail.com');
      return;
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    // Si todo es válido
    setError('');
    console.log('Usuario registrado:', { nombre, apellido, correo });
    // Aquí podrías enviar los datos a tu backend

    // Redirigir, si es necesario
  };
*/
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4 text-center">Registro de Usuario</h2>
{/*
        {error && (
          <div className="mb-4 text-red-600 text-sm text-center">
            {error}
          </div>
        )}
*/}
        <form>
          <input
            className="w-full p-2 mb-3 border rounded"
            ref={nombre}
            type="text"
            name="nombre"
            id="nombre"
            placeholder="Nombre"
            /* onChange={(e) => setNombre(e.target.value)} */
          />
          <input
            className="w-full p-2 mb-3 border rounded"
            ref={apellido}
            type="text"
            name="apellido"
            id="apellido"
            placeholder="Apellido"
            /* onChange={(e) => setApellido(e.target.value)} */
          />
          <input
            className="w-full p-2 mb-3 border rounded"
            ref={email}
            type="email"
            name="email"
            id="email"
            placeholder="Correo @gmail.com"
            /* onChange={(e) => setCorreo(e.target.value)} */
          />
          <input
            className="w-full p-2 mb-3 border rounded"
            ref={password}
            type="password"
            name="password"
            id="password"
            placeholder="Contraseña"
            /* onChange={(e) => setPassword(e.target.value)} */
          />
          <input
            className="w-full p-2 mb-4 border rounded"
            ref={confirmPassword}
            type="password"
            name="confirm-password"
            id="confirm-password"
            placeholder="Repetir contraseña"
            /* onChange={(e) => setConfirmPassword(e.target.value)} */
          />
          <input
            className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
            type="button"
            value="Registrar"
            onClick={handleSubmit}
          >
          </input>
        </form>

        <button
          type="button"
          //onClick={handleSubmit}
          className="w-full bg-gray-400 text-white p-2 rounded hover:bg-gray-500 mt-2"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}

export default Register;
