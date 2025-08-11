import React from 'react';
import Navigation from "@/components/Layout/Nav/Navigation";
import FooterNavigation from "@/components/Layout/Nav/FooterNavigation";
import styles from './Footer.module.css';
import { Typography, Caption } from '@/components/ui/Typography';
import { Container } from '@/components/Layout/Container';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.wrapper}>
                    <div className={styles.mobileContent}>
                        <Navigation/>
                        <Typography variant="medium" as="h6">Call me</Typography>
                        <li>
                            <Typography variant="medium" as="a" href='tel:+79118183410'>
                                +7 (911) 818-34-10
                            </Typography>
                        </li>
                    </div>
                    <div className={styles.desktopContent}>
                        <Typography variant="large">
                            architecture{' '}
                            <Caption as="span">© 2023 Architecture. All rights reserved.</Caption>
                        </Typography>
                        <FooterNavigation/>
                    </div>
                </div>
            </Container>
        </footer>
    );
}