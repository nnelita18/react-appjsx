import React from 'react';
// import FormHook from './components/FormHook';
// import EjemploUno from './components/EjemploUno';
// import Lista from './components/Lista';
import Saludo from './components/Saludo';
import Comentario from './components/Comentario';

function App() {
  const sujeto = {
    nombre: 'Pedrito',
    urlImagen: 'https://via.placeholder.com/150',
    texto:'Lorem impsum dolor sit amet consectetur adisiping elit.'
  }
  return (
    <div className="App">
      <Saludo person="Pepe" edad="25" />
      <Saludo person="Pedro"/>
      <Comentario sujeto={sujeto}  />
    </div>
  );
}

export default App;
