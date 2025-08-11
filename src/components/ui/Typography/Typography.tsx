// components/ui/Typography/Typography.tsx
import React from 'react';
import clsx from 'clsx';
import styles from './Typography.module.css';

type TypographyVariant = 'small' | 'medium' | 'large' | 'xl';
type TypographyElement = 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'a';

interface TypographyProps {
    children: React.ReactNode;
    variant: TypographyVariant;
    as?: TypographyElement;
    className?: string;
    color?: 'primary' | 'secondary' | 'inherit';
    align?: 'left' | 'center' | 'right' | 'inherit';
    href?: string;
}

export function Typography({
                               children,
                               variant,
                               as: Component = 'p',
                               className,
                               color,
                               align,
                                href
                           }: TypographyProps) {
    return (
        <Component
            className={clsx(
                styles[`typography-${variant}`],
                color && styles[`color-${color}`],
                align && styles[`align-${align}`],
                className
            )}
            href={href}
        >
            {children}
        </Component>
    );
}

// Специализированные компоненты для удобства
export function BodyText({ children, className, ...props }: Omit<TypographyProps, 'variant'>) {
    return (
        <Typography variant="small" className={className} {...props}>
            {children}
        </Typography>
    );
}

export function Caption({ children, className, ...props }: Omit<TypographyProps, 'variant'>) {
    return (
        <Typography variant="medium" className={className} {...props}>
            {children}
        </Typography>
    );
}

export function Title({ children, className, ...props }: Omit<TypographyProps, 'variant'>) {
    return (
        <Typography variant="large" as="h2" className={className} {...props}>
            {children}
        </Typography>
    );
}

export function Heading({ children, className, ...props }: Omit<TypographyProps, 'variant'>) {
    return (
        <Typography variant="xl" as="h1" className={className} {...props}>
            {children}
        </Typography>
    );
}