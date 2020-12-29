import React from 'react'
import logo from '../Assests/adidas.png'
import '../App.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <nav class="navbar navbar-light "
                style={{ backgroundColor: "#ffffff !important", boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)" }}>
                <Link class="navbar-brand" to="/" >
                    <img className="cart" src={logo} width="100" height="50" style={{ marginLeft: "4rem" }} alt="" loading="lazy" />
                </Link>

            </nav>
        </div>
    )
}

export default Header
