import { ButtonBase } from '@/components/ButtonBase/ButtonBase'
import { CloseIcon } from '@/icons'
import { useTypedSelector } from 'src/hooks/useTypedSelector'
import { ThemeToggle } from '../index'
import { useActions } from 'src/hooks/useActions'
import { useWindowSize } from '@/hooks/useWindowSize'
import { useLockedBody } from 'usehooks-ts'
import { MenuLang } from './components/MenuLang/MenuLang'
import { RoutesEnum } from '@/constants/routes'
import { SubscribeButton } from '@/UI/SubscribeButton/SubscribeButton'
import classNames from 'classnames'
import styles from './Menu.module.scss'
import Link from 'next/link'

export const Menu = () => {

    const {isOpened} = useTypedSelector(state => state.menuReducer)
    const {showMenu} = useActions()

    const handleClose = () => showMenu(false)
    
    const { height } = useWindowSize();

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
        <div style={{height: `${height}px`}} className={classNames(styles.menu, isOpened && styles.opened)}>
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
                        {items.map(el => (
                            <li key={el.text} className={styles.item}>
                                <Link href={el.href}>
                                    <a className={styles.link}>{el.text}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <SubscribeButton className={styles.btn} />
            </div>
        </div>
    )
}