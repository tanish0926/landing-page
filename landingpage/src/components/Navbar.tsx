import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import '../style/Navbar.css';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="logo">SellSharp<span className="dot">.</span></div>

                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? <X size={28} color="#fff" /> : <Menu size={28} color="#fff" />}
                </div>

                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <li><a href="#hero" onClick={() => setIsOpen(false)}>Home</a></li>
                    <li><a href="#features" onClick={() => setIsOpen(false)}>Features</a></li>
                    <li><a href="#solutions" onClick={() => setIsOpen(false)}>Solutions</a></li>
                    <li><a href="#pricing" onClick={() => setIsOpen(false)}>Pricing</a></li>
                    <li className="mobile-btn">
                        <button className="btn-primary">Start Free Trial</button>
                    </li>
                </ul>

                <div className="nav-actions desktop-only">
                    <button className="btn-primary">Start Free Trial</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
