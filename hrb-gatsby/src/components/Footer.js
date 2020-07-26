import React from 'react'
import footerStyles from "./Footer.module.css"

const Footer = () => (
    <footer>
        <div className={footerStyles.footer}>
            <span className="text-muted">This is footer</span>
        </div>
    </footer>
);

export default Footer;
