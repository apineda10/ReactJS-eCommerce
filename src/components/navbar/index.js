import React from "react";
import './style.css';
import Carrito from '../carrito';
import { Link } from "react-router-dom";


const NavBar = () => {
    return(
    <div className="contenedor-navbar m-8">
    <nav className="navbar navbar-expand-lg bg-primary">
      <Link to="/" className="navbar-brand navbar-logo">Tienda</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="container-fluid navbar-items" id="navbarNavDropdown">
          <ul className="navbar-nav">            
            <li className="nav-item">
              <Link to={`/categoria/${"smartphones"}`} className="nav-link">smartphones</Link>
            </li>
            <li className="nav-item">
              <Link to={`/categoria/${"laptops"}`} className="nav-link">laptops</Link>
            </li>
            <li className="nav-item">
              <Link to={`/categoria/${"fragrances"}`} className="nav-link">fragrances</Link>
            </li>
            <li className="nav-item">
              <Link to={`/categoria/${"skincare"}`} className="nav-link">skincare</Link>
            </li>
            <li className="nav-item">
              <Link to={`/categoria/${"groceries"}`} className="nav-link">groceries</Link>
            </li>
            <Carrito/>                                    
          </ul>
        </div>    
      </div>
    </nav>  
  </div>
  )
}


export default NavBar