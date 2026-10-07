import React from 'react'

export default function Modal({ onClose, title, children }) {
    return (
        <div className='modal-overlay'>
            <div className='modal'>
                <div className='modal-title'>
                    <h2>{title}</h2>
                    <button className="modal-close-btn" onClick={onClose}>x</button>
                </div>
                <div className='modal-body'>
                    {children}
                </div>
                
            </div>
        </div>
        
    )
}
