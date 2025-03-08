import React from 'react'
import ReactDOM from 'react-dom/client'
//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
// index.css'
import '../styles/index.css'
// components
import Home from './components/Home';
import SecondsCounter from './components/SecondsCounter';



const intervalo= function(){
  const seis = Math.floor(contador/100000);
  const cinco = Math.floor(contador/10000);
  const cuatro = Math.floor(contador/1000);
  const tres = Math.floor(contador/100);
  const dos = Math.floor(contador/10);
  const uno = Math.floor(contador/1);
contador++;
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SecondsCounter secondUno={uno} secondDos={dos} secondTres={tres} secondCuatro={cuatro} secondCinco={cinco} secondSeis={seis}/>
  </React.StrictMode>,
)
};
setInterval(intervalo, 1000);
let contador = 0;


