import styles from './Card.module.css';
import { Typography } from '@/components/ui/Typography';
import Link from "next/link";

type CardProps = {
    title: string;
    id : number;
    description: string;
    tags?: string[];
    src?: string;
};


export function Card({ title, description, id, src }: CardProps) {
    return (
        <Link href={`/article/${id}`} className={styles.card}>
            <img src={src || "/article.svg"} alt={title || ""} />
            <div className={styles.cardText}>
                <Typography variant="large" as="div" className={styles.cardTitle}>{title}</Typography>
                <Typography variant="small" as="div">{description}</Typography>
            </div>
        </Link>
    );
}