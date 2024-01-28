import React from 'react';
import styles from './styles.module.css';
import classNames from "classnames";

export type TabItemProps = {
    children: React.ReactNode;
    onClick: () => void;
}

export const TabItem = ({children, onClick}: TabItemProps) => {
    return (
        <button className={classNames(styles.reset, styles.tab)} onClick={onClick}>
            {children}
        </button>
    );
};