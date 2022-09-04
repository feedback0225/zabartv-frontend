import { FC, forwardRef, PropsWithChildren } from 'react'
import { ButtonBase } from '@/components/ButtonBase/ButtonBase';
import styles from './Link.module.scss'
import classNames from 'classnames';

export interface LinkProps {
    className?: string;
    as?: 'link' | 'button';
    onClick?: () => void;
}

export const Link: FC<PropsWithChildren<LinkProps>> = forwardRef(({as = 'link', onClick, children, className, ...props}, ref) => {

    const proxy = {
        'link': 'a',
        'button': ButtonBase
     }

    const Element = proxy[as]

    return (
        <Element
            className={classNames(styles.link, className)}
            onClick={onClick}
            {...props}
        >
            {children}
        </Element>
    )
})

Link.displayName = 'Link.tsx'