import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styling/HeaderStyle.scss'

const Header = () => {


    return(
        <header className='headers'>
            <NavLink to ="/" className='logo-container'>
                <img src = {"wasatchJunkProsLogo.png"} alt="Logo" className='logo'/>
            </NavLink>
            <nav className='header-navs'>
                <NavLink to="/" activeClassName="active-link">Home</NavLink>
                <NavLink to="/services" activeClassName="active-link">Services</NavLink>
                <NavLink to="/about" activeClassName="active-link">About Us</NavLink>
                <NavLink to="/contact" activeClassName="active-link">Contact Us</NavLink>
                <NavLink to="/pricing" activeClassName="active-link">Pricing</NavLink>
                <NavLink to="/locations" activeClassName="active-link">Cities Served</NavLink>
            </nav>
            <div className='call-us'>
                <div className='phone'>Give Us A Call: </div>
                <img src='phone.gif' alt='Logo' className='phone-logo'/>
                <div className='phone'> (801) 707-9107 </div>
            </div>
        </header>
    );
};
export default Header;