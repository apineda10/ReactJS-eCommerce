import React from 'react'
import './style.css'
import Carrito from '../carrito'



const NavbarItems = ({items})=>{
    const isMobile= window.matchMedia("(max-width: 980px)").matches


    return(
        <>
            {console.log(isMobile)}
            {items.map(item =>
                     <li className="nav-item">
                     <a className="nav-link" aria-current="page" href="#">{item}</a>
                    </li>)}
            {!isMobile  ?
                        <Carrito/>          
                        :
                        <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Carrito</a>    
                        </li>}
                  
        </>
    )}


export default NavbarItems   

