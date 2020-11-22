import React from 'react'
import './Footer.css'

function getYear() {
    const today = new Date()
    return today.getFullYear()
}

function Footer() {
    return (
        <div className="Footer">
            <h2>Alex Shearer copyright {getYear()}</h2>
        </div>
    )
}


export default Footer