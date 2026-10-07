import React from 'react'

export default function Toast({ title, content,onClose }) {
    return (
        <div className='toast-overlay'>
            <div className='toast'>
                <div className='toast-title'>
                    <h2>{title}</h2>
                    <button onClick={onClose}>x</button>
                </div>
                <div className='toast-content'>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    )
}
