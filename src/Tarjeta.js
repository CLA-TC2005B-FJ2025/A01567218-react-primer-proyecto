import React from 'react'

export function Tarjeta(props) {  // se le puede poner otro nombre
  return (
    <div className="card">
        <div className="card-image">
          <figure className="image is-1by1">
            <img src={props.image} alt="pda logo" />
          </figure>
        </div>
  
        <div className="card-content">
          <div className="media-content">
            <p className="title is-4">{props.nombre}</p>
            <p className="subtitle is-6">{props.colorFavorito} es mi color favorito</p>
          </div>
        </div>
      </div>
  
  )
}