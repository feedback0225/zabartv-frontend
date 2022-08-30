import { ButtonBase } from '@/components/ButtonBase/ButtonBase'
import { ProfileIcon, SearchIcon } from '@/components/Icons/Icons'
import { RoutesEnum } from '@/constants/routes'
import classNames from 'classnames'
import Link from 'next/link'
import styles from './Actions.module.scss'

export const Actions = () => {
    return (
        <ul className={classNames('list-reset', styles.list)}>
            <li className={styles.item}>
                <Link href={RoutesEnum.Cabinet}>
                    <a className={styles.link}>
                        <ProfileIcon />
                    </a>
                </Link>
            </li>
            <li className={styles.item}>
                <ButtonBase className={styles.link}>
                    <SearchIcon />
                </ButtonBase>
            </li>
        </ul>
    )
}
