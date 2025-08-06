import styles from './Card.module.css';

type CardProps = {
    title: string;
    description: string;
    tags?: string[];
    src?: string;
};

export function Card({ title, description, tags, src }: CardProps) {
    return (
        <article className={styles.card}>
            <img src="/article.svg" alt=""/>
            <a>{title}</a>
            <p>{description}</p>
        </article>
    );
}