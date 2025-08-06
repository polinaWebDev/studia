import React from 'react';
import Navigation from "@/components/Nav/Navigation";
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.wrapper}>
                    <Navigation/>
                    <h6>Call me</h6>
                    <li><a href='tel:+79118183410'>+7 (911) 818-34-10</a></li>
                </div>
                <p>architecture <span>© 2023 Architecture. All rights reserved.</span></p>
            </div>
        </footer>
    );
}

export default Footer;