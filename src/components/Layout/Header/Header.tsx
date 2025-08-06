'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import styles from './Header.module.css';
import Navigation from "@/components/Layout/Nav/Navigation";


function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(prev => !prev);


    return (
        <>
            <header className={clsx(styles.header, "text-black")}>
                    <div className="container">
                        <nav>
                            <Link href='/public'>architecture</Link>

                            <button onClick={toggleMenu} className={styles.menuButton} aria-label="Toggle menu">
                                ☰
                            </button>
                        </nav>
                    </div>
            </header>

            {isOpen && (
                <aside className={clsx(styles.asideMenu, "text-black")}>
                    <button onClick={toggleMenu} className={styles.closeButton} aria-label="Close menu">
                        ✕
                    </button>
                    <Navigation/>
                    <a href='tel:+79118183410'>+7 (911) 818-34-10</a>
                </aside>
            )}
        </>
    );
}

export default Header;