import { RoutesEnum } from '@/constants/routes';
import classNames from 'classnames';
import Link from 'next/link';
import styles from './Nav.module.scss';

export const Nav = () => {

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
        <nav className={styles.nav}>
            <ul className={classNames('list-reset', styles.list)}>
                {items.map(el => (
                    <li key={el.text} className={styles.item}>
                        <Link href={el.href}>
                            <a className={styles.link}>{el.text}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
