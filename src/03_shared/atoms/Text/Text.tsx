import styles from './styles.module.css';
import classNames from "classnames";

export type TextProps = {
    children: string;
    bold: boolean;
    size: string;
    color: string;
    font: string;
    uppercase: boolean;
}

export const Text = ({children, color = 'black', font = 'default', bold = false, size, uppercase = false}: TextProps) => {
    const className = classNames({
        [styles.kurale]: font === 'kurale',
        [styles.openSans]: font === 'default'
    }, {
        [styles.xs]: size === 'xs',
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.l]: size === 'l',
        [styles.xl]: size === 'xl',
        [styles.xxl]: size === 'xxl',
    }, {
        [styles.bold]: bold === true
    }, {
        [styles.black]: color === 'black',
        [styles.white]: color === 'white',
        [styles.gray]: color === 'gray',
    }, {
        [styles.uppercase]: uppercase === true
    })


    return (
        <div className={className}>
            {children}
        </div>
    );
};