import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <nav className="bg-blue-900 text-white px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <img
                        src="/EncuestappLogo.png"
                        alt="Logo Encuestapp"
                        className="h-12 w-auto"
                    />
                </div>

                {/* Navegación centrada */}
                <ul className="flex space-x-8 text-lg">
                    <li><a href="#inicio" className="hover:text-blue-300">Inicio</a></li>
                    <li><a href="#sobre-nosotros" className="hover:text-blue-300">Sobre nosotros</a></li>
                    <li><a href="#contacto" className="hover:text-blue-300">Contacto</a></li>
                </ul>

                {/* Botones */}
                <div className="flex space-x-4">
                    <button
                        onClick={() => navigate('/login')}
                        className="bg-white text-blue-900 px-4 py-2 rounded hover:bg-blue-100"
                    >
                        Login
                    </button>
                    <button
                        onClick={() => navigate('/register')}
                        className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 shadow-md transition"
                    >
                        Registrarse
                    </button>
                </div>
            </nav>

            {/* Cuerpo */}
            <main className="flex-grow px-4 py-12 bg-blue-50" id="inicio">
                <section id="sobre-nosotros" className="max-w-4xl mx-auto bg-white p-8 rounded shadow">
                    <h2 className="text-3xl font-bold mb-4 text-blue-900">Sobre nosotros</h2>
                    <p className="text-gray-700">
                        Somos una plataforma dedicada a la gestión y creación de encuestas de manera sencilla,
                        rápida y efectiva. Nuestro objetivo es facilitar la recolección de datos para estudiantes,
                        docentes, empresas y cualquier persona que necesite crear formularios personalizados.
                    </p>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-blue-900 text-white py-6" id="contacto">
                <div className="container mx-auto px-4 text-center">
                    <h4 className="text-lg font-semibold mb-2">Contacto</h4>
                    <p>Email: contacto@encuestapp.com</p>
                    <p>Teléfono: +54 9 261 123 4567</p>
                </div>
            </footer>
        </div>
    );
}