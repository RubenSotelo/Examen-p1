import React, { useState } from "react";
import './registro.css'

let inx = 0
let bandera
let indexxxx = 0
export const Clases = () => {
  const [cantidadAux, setCantidadAux] = useState(0)
  const [cantidad, setCantidad] = useState(0)
  const [alumno, setAlumno] = useState(0)
  const [menores, setMenores] = useState(0)  
  const [promedio, setPromedio] = useState(0);
  const [edades, setEdad] = useState([]);
  
  const agregar = (nuevo) =>{
    console.log(nuevo);
    setAlumno(nuevo)
  }

  const insertar = () =>{
    inx++
    console.log(alumno);
    let valor = Number.parseFloat(alumno)
    setEdad([...edades,alumno])
  }

  const agregarCantidad = () =>{
    setCantidadAux(cantidad)
  }
  const CalculaPromedio = () =>{
    let resultado=0, final, edadpar
    edades.map(edad => {
        edadpar = Number.parseFloat(edad)
        console.log("La edad"+edad);
        
        if(edad <18){
            indexxxx++
        }
        resultado = edadpar + resultado
        console.log("total "+resultado);
        
    })
    let aux = Number.parseFloat(cantidad)
    final = resultado/aux
    console.log(final);
    setPromedio(final)
    setMenores(indexxxx)
  }

  return (
    <div className="alternating-colors">
      <h1>CALIFICACIONES</h1>
      <input placeholder="cantidad Alumnos"  disabled = {cantidadAux != 0} onChange={(e) => setCantidad(e.target.value)}/>
      <button disabled = {cantidadAux != 0} onClick={agregarCantidad}>Ingresar</button>

      <input placeholder="edad"  disabled = {cantidadAux === 0} onChange={e => agregar(e.target.value)}/>
      <button disabled = {inx === cantidadAux} onClick={insertar}>Ingresar</button>

      <button disabled = {inx != cantidadAux && cantidadAux === 0} onClick={CalculaPromedio}>Calcular</button>
      <h1>Promedio: {promedio}</h1>
      <h1>Menores: {menores}</h1>
    </div>
  );
};
