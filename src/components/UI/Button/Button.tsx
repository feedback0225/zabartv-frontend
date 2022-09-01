import {FC, forwardRef, PropsWithChildren, ReactNode} from 'react';
import {ButtonBase} from '@/components/ButtonBase/ButtonBase';
import classNames from 'classnames';
import styles from './Button.module.scss'

export interface ButtonProps {
    gradient?: boolean;
    icon?: ReactNode;
    size?: 'large' | 'medium' | 'small';
    as?: 'link' | 'button';
    className?: string
}

export const Button: FC<PropsWithChildren<ButtonProps>> = forwardRef(({as = 'button', children, gradient, icon, size = 'medium', className, ...props}, ref) => {

    const proxy = {
        'link': 'a',
        'button': ButtonBase
     }

    const Element = proxy[as]

    return (
        <Element
            className={classNames(
                styles.btn,
                gradient && styles.gradient,
                size === 'large' && styles.large,
                size === 'medium' && styles.medium,
                size === 'small' && styles.small,
                className
            )}
            {...props}
        >
            {icon && <span className={styles.icon}>{icon}</span>}
            {children}
        </Element>
    )
})

Button.displayName = 'Button.tsx'