import { ButtonBase } from '@/components/ButtonBase/ButtonBase'
import { CloseIcon } from '@/icons'
import { useTypedSelector } from 'src/hooks/useTypedSelector'
import { ThemeToggle } from '../index'
import { useActions } from 'src/hooks/useActions'
import { useLockedBody } from 'usehooks-ts'
import { MenuLang } from './components/MenuLang/MenuLang'
import { RoutesEnum } from '@/constants/routes'
import { SubscriptionButton } from '@/UI/SubscriptionButton/SubscriptionButton'
import classNames from 'classnames'
import styles from './Menu.module.scss'
import Link from 'next/link'

export const Menu = () => {

    const {isOpened} = useTypedSelector(state => state.menuReducer)
    const {showMenu} = useActions()

    const handleClose = () => showMenu(false)
    
    useLockedBody(isOpened)

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
        <div className={classNames(styles.menu, isOpened && styles.opened)}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <ThemeToggle className={styles.toggle} />
                    <MenuLang />
                    <ButtonBase onClick={handleClose} className={styles.close}>
                        <CloseIcon />
                    </ButtonBase>
                </div>
                <nav className={styles.nav}>
                    <ul className={classNames('list-reset', styles.list)}>
                        {items.map(el => {

                            const {href, text} = el

                            return (
                                <li key={text} className={styles.item}>
                                    <Link href={href}>
                                        <a className={styles.link}>{text}</a>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                <SubscriptionButton className={styles.btn} />
            </div>
        </div>
    )
}