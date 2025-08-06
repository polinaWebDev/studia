import React from 'react';
import styles from "@/components/Layout/Header/Header.module.css";
import Link from "next/link";

function Navigation() {
    return (
        <nav>
            <ul className={styles.navList}>
                <li><Link href='/public'>Projects</Link></li>
                <li><Link href='/public'>News</Link></li>
                <li><Link href='/public'>Blog</Link></li>
                <li><Link href='/public'>Contacts</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;