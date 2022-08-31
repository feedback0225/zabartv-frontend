import { ButtonBase } from '@/components/ButtonBase/ButtonBase'
import { CloseIcon } from '@/icons'
import { useTypedSelector } from 'src/hooks/useTypedSelector'
import { ThemeToggle } from '../index'
import { useActions } from 'src/hooks/useActions'
import { useLockedBody } from 'usehooks-ts'
import { MenuLang } from './components/MenuLang/MenuLang'
import classNames from 'classnames'
import styles from './Menu.module.scss'
import { RoutesEnum } from '@/constants/routes'
import { SubscriptionButton } from '@/components/UI/SubscriptionButton/SubscriptionButton'

export const Menu = () => {

    const {isOpenMenu} = useTypedSelector(state => state.menuReducer)

    const {toggleMenu} = useActions()

    const handleClose = () => toggleMenu(false)

    useLockedBody(isOpenMenu)

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
        <div className={classNames(styles.menu, isOpenMenu && styles.opened)}>
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
                                    <a href={href} className={styles.link}>{text}</a>
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