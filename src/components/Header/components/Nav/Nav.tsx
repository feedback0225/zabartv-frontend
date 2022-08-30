import { FC } from 'react';
import { RoutesEnum } from '@/constants/routes';
import classNames from 'classnames';
import styles from './Nav.module.scss';

interface NavProps {
    className?: string;
}

export const Nav: FC<NavProps> = ({className}) => {

    const items = [
        {href: RoutesEnum.Humor, text: 'Юмор'},
        {href: RoutesEnum.Music, text: 'Музыка'},
        {href: RoutesEnum.Cartoons, text: 'Мультфильмы'},
        {href: RoutesEnum.Tv, text: 'Тв'},
        {href: RoutesEnum.Films, text: 'Фильмы'},
        {href: RoutesEnum.Series, text: 'Сериалы'},
        {href: RoutesEnum.New, text: 'New'},
    ]

    return (
        <nav className={classNames(styles.nav, className)}>
            <ul className={classNames('list-reset', styles.list)}>
                {items.map(el => {

                    const {href, text} = el

                    return (
                        <li key={text} className={styles.item}>
                            <a href={href} className={styles.link}>{text}</a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
