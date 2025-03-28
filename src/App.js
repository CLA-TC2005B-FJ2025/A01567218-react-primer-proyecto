// import CSS
import 'bulma/css/bulma.css'

import React from 'react'
import { Tarjeta } from './Tarjeta'

// Importamos las imagenes
import WandaImage from './imágenes/wanda.png'
import LokiImage from './imágenes/loki.png'
import NatImage from './imágenes/black.png'


export function App() {
  return (
    <div>
      <div style={{ fontSize: '35px', fontWeight: 'bold'}}> Personajes de Marvel </div>
        <div className="container">
          <section className="section">
            <div className="columns">
              <div className="column is-2">
                <Tarjeta nombre="Scarlet Witch" colorFavorito="Rojo" image={WandaImage}/>
              </div>
              <div className="column is-2">
                <Tarjeta nombre="Loki Odinson" colorFavorito="Verde" image={LokiImage}/>
              </div>
              <div className="column is-2">
                <Tarjeta nombre="Black Widow" colorFavorito="Negro" image={NatImage}/>
              </div>
            </div>
          </section>
        </div>
    </div>
  
  )
}