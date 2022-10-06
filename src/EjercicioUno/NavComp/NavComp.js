import React from 'react'
import "./NavComp.css"

export const NavComp = () => {

    let menu = ['Noticias', 'Eventos', 'Cartelera', 'Contacto', 'Ayuda']

    return (
        <div>
                <nav>
                    {menu.map((elemento, index) => {
                        return(
                            <div key={index}>{elemento}</div>
                        )
                    })}
                </nav>
        </div>
    )

}