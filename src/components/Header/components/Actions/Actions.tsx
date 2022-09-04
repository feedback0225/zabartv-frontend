import { ButtonBase } from '@/components/ButtonBase/ButtonBase'
import { ProfileIcon, SearchIcon } from '@/icons'
import { useActions } from 'src/hooks/useActions'
import { RoutesEnum } from '@/constants/routes'
import classNames from 'classnames'
import styles from './Actions.module.scss'
import Link from 'next/link'

export const Actions = () => {

    const {setVisibleSearch} = useActions()

    const handleOpenSearch = () => setVisibleSearch(true)

    return (
        <ul className={classNames('list-reset', styles.list)}>
            <li className={styles.item}>
                <Link href={RoutesEnum.Cabinet} className={styles.btn}>
                    <a className={styles.btn}>
                        <ProfileIcon />
                    </a>
                </Link>
            </li>
            <li className={styles.item}>
                <ButtonBase onClick={handleOpenSearch} className={styles.btn}>
                    <SearchIcon />
                </ButtonBase>
            </li>
        </ul>
    )
}
