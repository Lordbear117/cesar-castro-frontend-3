import React, { useState } from 'react'
import Card from './Components/Card'
import Message from './Components/Message'
import './App.css'

function App() {

  const [estudiante, setEstudiante] = useState([]);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [flag, setFlag] = useState(false);

  const nombreValido = (nombre) => {
    if (nombre.length < 3 || nombre.charAt(0) === " ") {
      setFlag(true);
      return false;
    }
    return true
  }

  const apellidoValido = (apellido) => {
    if (apellido.length < 6) {
      setFlag(true);
      return false;
    }
    return true
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEstudiante = {
      nombre: nombre,
      apellido: apellido,
    };

    const nombreValidado = nombreValido(newEstudiante.nombre);
    const apellidoValidado = apellidoValido(newEstudiante.apellido);

    if (nombreValidado && apellidoValidado) {
      setEstudiante((prev) => [...prev, newEstudiante]);
      setFlag(false)
    }

    setNombre("");
    setApellido("");
  };

  return (
    <div className='app-container'>

      <h1>Carga de estudiantes</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-item'>
          <label style={{ paddingRight: "10px" }}>Nombre: </label>
          <input
            className='input-text'
            type="text"
            value={nombre}
            size={30}
            placeholder='Ingresa nombre de estudiante'
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className='form-item'>
          <label style={{ paddingRight: "10px" }}>Email: </label>
          <input
            className='input-text'
            type="text"
            value={apellido}
            size={30}
            placeholder='Ingresa apellido de estudiante'
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>
        <button type='submit'>Enviar</button>
      </form>

      {flag ? <Message /> : null}

      <div className='container'>
        {estudiante.map((estudiante, index) => (
          <Card key={index}
            estudiante={estudiante}
          />
        ))}
      </div>
      
    </div>
  )
}

export default App
