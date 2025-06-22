import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function EncuestaCreada() {
    const location = useLocation();
    const navigate = useNavigate();
    const preguntas = location.state?.questions || []; // Recibe las preguntas desde la vista "DashboardEncuesta" y las guarda en la variable preguntas

    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <nav className="bg-blue-900 text-white px-6 py-4 flex items-center justify-between">
                <div className="flex items-center">
                    <img src="/EncuestappLogo.png" alt="Logo" className="h-12 w-auto" />
                </div>
                <ul className="flex space-x-8 text-lg">
                    <li><a href="/" className="hover:text-blue-300">Inicio</a></li>
                    <li><a href="/" className="hover:text-blue-300">Sobre nosotros</a></li>
                    <li><a href="/" className="hover:text-blue-300">Contacto</a></li>
                </ul>
                <button
                    onClick={() => navigate('/')}
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                    Cerrar sesión
                </button>
            </nav>

            {/* Cuerpo */}
            <main className="flex-grow px-4 py-12 bg-blue-50">
                <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow">
                    <h2 className="text-2xl font-bold text-blue-900 mb-6">Encuesta creada</h2>

                    {/* Este codigo recorre la variable preguntas.
                        Para cada pregunta crea un div para mostrarla en la vista. */}
                    {preguntas.length > 0 ? (
                        preguntas.map((pregunta, idx) => (
                            <div key={idx} className="mb-6">
                                <p className="font-semibold text-blue-800">{pregunta}</p>
                                <input
                                    type="text"
                                    placeholder="Escribí tu respuesta"
                                    className="w-full px-4 py-2 border rounded mt-2"
                                />
                            </div>
                        ))
                    ) : (
                        // Si no se reciben preguntas se muestra este mensaje.
                        <p>No se recibieron preguntas.</p>
                    )}
                </div>
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

