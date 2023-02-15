import React from "react";
import './style.css';

const Carrito = () => {
    return (
        <li className="nav-item">
            <button id="btnCarro" className="btn bi-cart-fill" ></button>  
            <p id="btnCount" className="btnCount" href="#">1</p>         
        </li>
    )
}

export default Carrito