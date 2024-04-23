import React, { useState } from 'react'; // Añadí "React" aquí
import reactLogo from '../src/assets/react.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Greeting from './Components/Greeting/Greeting';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Greeting
        nombre="Florencia"
      />
    </>
  );
}

export default App;
