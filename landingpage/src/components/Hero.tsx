import React from 'react';
import { TrendingUp, Mail, ArrowRight, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import '../style/Hero.css';

const Hero: React.FC = () => {
    return (
        <section className="hero" id="hero">
            <div className="hero-bg-glow"></div>

            <motion.div
                className="hero-content"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="badge-wrapper">
                    <span className="badge">New: AI Agent V2.0</span>
                </div>
                <h1 className="hero-title">
                    AI-Powered Emails <br />
                    <span className="gradient-text">That Close Deals</span>
                </h1>
                <p className="hero-subtitle">
                    Write smarter, faster, and more personalized emails that turn leads into customers—at scale.
                </p>
                <div className="hero-buttons">
                    <button className="btn-hero primary">
                        Start Free Trial <ArrowRight size={18} className="btn-icon" />
                    </button>
                    <button className="btn-hero secondary">
                        <PlayCircle size={18} className="btn-icon" /> View Demo
                    </button>
                </div>
            </motion.div>

            <motion.div
                className="hero-visuals"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
                <motion.div
                    className="glass-card card-1"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                    <TrendingUp size={30} color="#0ea5e9" />
                    <span>Reply Rate</span>
                    <h3>+45%</h3>
                </motion.div>

                <motion.div
                    className="glass-card card-2"
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                    <Mail size={30} color="#38bdf8" />
                    <span>AI Drafts</span>
                    <h3>Instant</h3>
                </motion.div>

                {/* Decorative Circle Behind */}
                <div className="circle-graphic"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
