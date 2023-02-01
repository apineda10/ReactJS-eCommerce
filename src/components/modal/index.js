import React from 'react'
import './style.css'

const Modal = ({child,isOpen,actionModal}) => {
    return (
        <>
            {isOpen && (
                <div className='modal-overlay'>
                    <div className='modal-content'>
                        {child}
                        <button className='modal-close' onClick={actionModal}>Aceptar</button>
                    </div>
                </div>
            )}
        </>
    )
} 

export default Modal