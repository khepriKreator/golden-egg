import styles from './styles.module.css';
import classNames from 'classnames'
import React from "react";

export type ButtonProps = {
    children: React.ReactNode;
    variant: 'colored' | 'outline' | null;
}

export const Button = ({children, variant}: ButtonProps) => {
    const className = classNames(styles.button, styles.font, {
        [styles.colored]: variant === 'colored',
        [styles.outline]: variant === 'outline'
    })

    return (
        <button className={className}>
            {children}
        </button>
    );
};