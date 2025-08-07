import clsx from "clsx";
import styles from './Button.module.css';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    onClick?: () => void;
    className?: string;
}

export default function Button({
                    children,
                    variant = 'primary',
                    size = 'md',
                    onClick,
                    className
                }: ButtonProps) {
    return (
        <button
            className={clsx(
                styles.button,
                styles[variant],
                styles[size],
                className
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
}