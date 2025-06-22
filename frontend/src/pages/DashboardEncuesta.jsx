import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const navigate = useNavigate();
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState('');

    // Funcion que añade las preguntas a 'questions'
    const handleAddQuestion = () => {
        if (currentQuestion.trim()) {
            setQuestions([...questions, currentQuestion]);
            setCurrentQuestion('');
        }
    };

    // Funcion que envia las preguntas a la vista "EncuestaCreada"
    const handleFinish = () => {
        // Aquí se enviará la encuesta al backend más adelante
        console.log('Preguntas a enviar:', questions);
        navigate('/encuesta-creada', { state: { questions } });
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <nav className="bg-blue-900 text-white px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <img
                        src="/public/EncuestappLogo.png"
                        alt="Logo Encuestapp"
                        className="h-12 w-auto"
                    />
                </div>

                {/* Navegación centrada */}
                <ul className="flex space-x-8 text-lg">
                    <li><a href="/" className="hover:text-blue-300">Inicio</a></li>
                    <li><a href="/" className="hover:text-blue-300">Sobre nosotros</a></li>
                    <li><a href="/" className="hover:text-blue-300">Contacto</a></li>
                </ul>

                {/* Botón Cerrar sesión */}
                <div>
                    <button
                        onClick={() => navigate('/')}
                        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                    >
                        Cerrar sesión
                    </button>
                </div>
            </nav>

            {/* Cuerpo */}
            <main className="flex-grow px-4 py-12 bg-blue-50">
                <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow">
                    <h2 className="text-3xl font-bold text-blue-900 mb-6">Crea tus preguntas</h2>

                    {/* Formulario para nueva pregunta */}
                    <div className="mb-6">
                        <input
                            type="text"
                            value={currentQuestion}
                            onChange={(e) => setCurrentQuestion(e.target.value)}
                            placeholder="Escribe tu pregunta"
                            className="w-full px-4 py-2 border rounded mb-2"
                        />
                        <button
                            // Llama a la funcion handleAddQuestion para añadirlas a una variable
                            onClick={handleAddQuestion}
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                        >
                            Guardar pregunta
                        </button>
                    </div>

                    {/* Botón para finalizar */}
                    <div className="mt-8">
                        <button
                            onClick={handleFinish}
                            className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 shadow-md"
                        >
                            Finalizar creación de encuesta
                        </button>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-blue-900 text-white py-6">
                <div className="container mx-auto px-4 text-center">
                    <h4 className="text-lg font-semibold mb-2">Contacto</h4>
                    <p>Email: contacto@encuestapp.com</p>
                    <p>Teléfono: +54 9 261 123 4567</p>
                </div>
            </footer>
        </div>
    );
}
