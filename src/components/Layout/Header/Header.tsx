'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import styles from './Header.module.css';
import Navigation from "@/components/Layout/Nav/Navigation";
import MobileNavigation from "@/components/Layout/Nav/MobileNavigation";
import { Container } from '@/components/Layout/Container';


function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(prev => !prev);


    return (
        <>
            <header className={clsx(styles.header, "text-black")}>
                    <Container>
                        <nav>
                            <Link href='/public'>architecture</Link>

                            {/* Desktop Navigation */}
                            <div className={styles.desktopNav}>
                                <Navigation />
                            </div>

                            {/* Mobile Menu Button */}
                            <button onClick={toggleMenu} className={styles.menuButton} aria-label="Toggle menu">
                                ☰
                            </button>
                        </nav>
                    </Container>
            </header>

            {isOpen && (
                <aside className={clsx(styles.asideMenu, "text-black")}>
                    <button onClick={toggleMenu} className={styles.closeButton} aria-label="Close menu">
                        ✕
                    </button>
                    <MobileNavigation />
                </aside>
            )}
        </>
    );
}

export default Header;