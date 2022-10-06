import React from 'react'
import { NavComp } from '../NavComp/NavComp'
import "./Header.css"
//import { NavComp } from './EjercicioUno/NavComp/NavComp';

export const Header = () => {

    return (
        <div>
            <header>
                <div>
                <img src="https://ih1.redbubble.net/image.373612698.9613/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg" alt="logo"/>
                </div>
                <div className="barra">
                <h1>Header</h1>
                <NavComp/>
                </div>
                </header>
        </div>
    )

}