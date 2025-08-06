import React from 'react';
import styles from "@/components/Header/Header.module.css";
import Link from "next/link";

function Navigation() {
    return (
        <nav>
            <ul className={styles.navList}>
                <li><Link href='/'>Projects</Link></li>
                <li><Link href='/'>News</Link></li>
                <li><Link href='/'>Blog</Link></li>
                <li><Link href='/'>Contacts</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;