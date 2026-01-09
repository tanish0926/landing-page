import React from 'react';
import { Zap, UserCheck, MessageSquare, BarChart3, Repeat, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import '../style/Features.css';

const featuresData = [
    {
        title: 'AI Email Generator',
        description: 'Create persuasive emails instantly with trained AI that mimics top sales performers.',
        icon: <Zap size={40} color="#0ea5e9" />
    },
    {
        title: 'Smart Personalization',
        description: 'Auto-inserts for names, roles, industries, and intents to boost relevance.',
        icon: <UserCheck size={40} color="#0ea5e9" />
    },
    {
        title: 'Tone & Style Control',
        description: 'Choose between friendly, persuasive, or direct tones for each stage of your sales funnel.',
        icon: <MessageSquare size={40} color="#0ea5e9" />
    },
    {
        title: 'Performance Analytics',
        description: 'Track opens, clicks, and conversions to continuously improve what works.',
        icon: <BarChart3 size={40} color="#0ea5e9" />
    },
    {
        title: '1-Click Campaigns',
        description: 'Launch entire sequences with one click—great for product announcements or follow-ups.',
        icon: <Repeat size={40} color="#0ea5e9" />
    },
    {
        title: 'Lead Scoring AI',
        description: 'Identify hot prospects with AI that scores leads based on behavior and history.',
        icon: <Layers size={40} color="#0ea5e9" />
    }
];

const Features: React.FC = () => {
    return (
        <section className="features" id="features">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Why Choose <span className="highlight">SellSharp</span></h2>
                    <p>Supercharge your sales outreach with intelligent automation.</p>
                </motion.div>

                <div className="features-grid">
                    {featuresData.map((feature, index) => (
                        <motion.div
                            className="feature-card"
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10, transition: { duration: 0.2 } }}
                        >
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
