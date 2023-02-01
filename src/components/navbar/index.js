import React from "react";
import './style.css';
import NavbarItems from "../navbar-items";



const NavBar = ({items}) => {
    return(
    <div className="contenedor-navbar m-8">
    <nav className="navbar navbar-expand-lg bg-primary">
      <a className="navbar-brand navbar-logo" href="#">BEBIVERY</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="container-fluid navbar-items" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <NavbarItems items={items}/>
          </ul>
        </div>    
      </div>
    </nav>  
  </div>



  )
}


export default NavBar