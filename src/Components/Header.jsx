import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styling/HeaderStyle.scss'
import BookButton from './Reuse/BookButton';

const Header = () => {


    return (
        <header className='headers'>
            <NavLink to="/" className='logo-container'>
                <img src={"wasatchJunkProsLogo.png"} alt="Logo" className='logo' />
            </NavLink>
            <nav className='header-navs'>
                <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>Home</NavLink>
                <NavLink to="/services" className={({ isActive }) => isActive ? 'active-link' : ''}>Services</NavLink>
                <NavLink to="/book-now" className={({ isActive }) => isActive ? 'active-link' : ''}>Book Now</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? 'active-link' : ''}>About Us</NavLink>
                <NavLink to="/pricing" className={({ isActive }) => isActive ? 'active-link' : ''}>Pricing</NavLink>
                <NavLink to="/locations" className={({ isActive }) => isActive ? 'active-link' : ''}>Cities Served</NavLink>
            </nav>
            <div className='call-us'>
                <BookButton/>
                <div>
                    
                </div>
                <img src='phone.gif' alt='Logo' className='phone-logo' />
                <a href="tel:+8017079107" className='phone'>801-707-9107</a>
            </div>
        </header>
    );
};
export default Header;