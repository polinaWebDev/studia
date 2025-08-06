import React from 'react';
import Navigation from "@/components/Layout/Nav/Navigation";
import styles from './Footer.module.css';
import { Typography, Caption } from '@/components/ui/Typography';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.wrapper}>
                    <Navigation/>
                    <Typography variant="medium" as="h6">Call me</Typography>
                    <li>
                        <Typography variant="medium" as="a" href='tel:+79118183410'>
                            +7 (911) 818-34-10
                        </Typography>
                    </li>
                </div>
                <Typography variant="large">
                    architecture{' '}
                    <Caption as="span">© 2023 Architecture. All rights reserved.</Caption>
                </Typography>
            </div>
        </footer>
    );
}