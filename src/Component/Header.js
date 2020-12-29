import React from 'react'
import logo from '../Assests/adidas.png'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import '../App.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <nav class="navbar navbar-light " 
            style={{backgroundColor:"#ffffff !important", boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)"}}>
                <Link class="navbar-brand" to="/" >
                    <img className="cart" src={logo} width="100" height="50" style={{marginLeft:"2rem"}} alt="" loading="lazy" />
                </Link>
                
                <Link to="/cart">
                <ShoppingCartIcon className="cart"  style={{ fontSize: 40 , color:"black" , marginRight:"2rem" }} />
                </Link>
            </nav>
        </div>
    )
}

export default Header
