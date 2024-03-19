import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post('http://localhost:8080/chat', { prompt })
            .then((res) => {
                setResponse(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            {/* CONTENIDO */}
            <div className="content">
                {/* CONTENEDOR */}
                <div className="container">
                    {/* FORMULARIO */}
                    <form className="form" onSubmit={handleSubmit}>
                        {/* INFORMACION */}
                        <div className="info">
                            <label className="label" htmlFor="info">
                                Pregunta o di algo...
                            </label>
                        </div>
                        {/* ENTRADA DE TEXTO */}
                        <div className="field">
                            <input
                                className="input"
                                type="text"
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                            />
                        </div>
                        {/* BOTON DE ENVIAR */}
                        <div>
                            <button className="submit" type="submit">
                                Enviar
                            </button>
                        </div>
                    </form>
                    {/* RESPUESTA DE LA API */}
                    <div className="response">
                        <p>{response}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
