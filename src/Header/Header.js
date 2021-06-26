import React from 'react'
import "./Header.css"
function Header() {
    return (
        <div className="Header">
            <h1>YourChallenge</h1>
            <div className="header_content">
                <h3 style={{textDecoration:"underline",textDecorationColor:"red"}}>Product</h3>
                <h3>Download</h3>
                <h3>Pricing</h3>
            </div>
        </div>
    )
}

export default Header
