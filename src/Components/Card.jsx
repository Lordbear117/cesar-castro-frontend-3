import React from "react"
import './Card.css'

const Card = ({ estudiante }) => {
  return (

    <div className="card">

      <div className="item">
        <li >Nombre - {estudiante.nombre}</li>
        <li >Apellido - {estudiante.apellido}</li>
      </div>
      
    </div>

  )
}

export default Card