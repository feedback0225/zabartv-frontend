import { FC, LinkHTMLAttributes, PropsWithChildren } from 'react'
import NextLink from 'next/link'
import styles from './Link.module.scss'
import classNames from 'classnames';

export interface LinkProps extends LinkHTMLAttributes<HTMLAnchorElement> {
    href: string;
    className?: string;
}

export const Link: FC<PropsWithChildren<LinkProps>> = ({href, children, className, ...props}) => {
    return (
        <NextLink href={href}>
            <a className={classNames(styles.link, className)}>{children}</a>
        </NextLink>
    )
}