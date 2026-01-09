import React from 'react';
import { Twitter, Github, Linkedin } from 'lucide-react';
import '../style/Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <h2>SellSharp.</h2>
                    <p>AI-Powered Emails That Close Deals.</p>
                </div>
                <div className="footer-links">
                    <div className="link-group">
                        <h4>Product</h4>
                        <a href="#features">AI Email Generator</a>
                        <a href="#solutions">Solutions</a>
                        <a href="#pricing">Pricing</a>
                    </div>
                    <div className="link-group">
                        <h4>Company</h4>
                        <a href="#">About Us</a>
                        <a href="#">Careers</a>
                        <a href="#">Contact</a>
                    </div>
                    <div className="link-group">
                        <h4>Legal</h4>
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                    </div>
                </div>
                <div className="footer-socials">
                    <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                    <a href="#" aria-label="GitHub"><Github size={20} /></a>
                    <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 SellSharp Landing Page. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
