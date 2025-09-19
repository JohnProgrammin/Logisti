import React, { useState } from 'react';
import { HamburgerIcon } from './HamburgerIcon'; // Using a custom icon component

function Hamburger() {
    const [open, setOpen] = useState(false);
    
    return (
        <div className="hamburger-container">
            <div className="hamburger-toggle" onClick={() => setOpen(!open)}>
                <HamburgerIcon isOpen={open} />
            </div>
            
            {open && (
                <div className="menu-overlay" onClick={() => setOpen(false)}>
                    <div className="menu-content" onClick={(e) => e.stopPropagation()}>
                        <ul className="menu-list">
                            <li><a href="#my-url">My URL</a></li>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#pricing">Pricing</a></li>
                            <li><a href="#analytics">Analytics</a></li>
                            <li><a href="#faqs">FAQs</a></li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Hamburger;