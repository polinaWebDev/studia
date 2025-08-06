import styles from './Card.module.css';
import { Typography } from '@/components/ui/Typography';

type CardProps = {
    title: string;
    description: string;
    tags?: string[];
    src?: string;
};


export function Card({ title, description }: CardProps) {
    return (
        <article className={styles.card}>
            <img src="/article.svg" alt=""/>
            <Typography variant="large" as="a">{title}</Typography>
            <Typography variant="small">{description}</Typography>
        </article>
    );
}