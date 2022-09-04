import { ButtonBase } from '@/components/ButtonBase/ButtonBase'
import { ProfileIcon, SearchIcon } from '@/icons'
import { useActions } from 'src/hooks/useActions'
import classNames from 'classnames'
import styles from './Actions.module.scss'

export const Actions = () => {

    const {setVisibleSearch, showRegisterModal} = useActions()

    const handleOpenModal = () => showRegisterModal(true)

    const handleOpenSearch = () => setVisibleSearch(true)

    return (
        <ul className={classNames('list-reset', styles.list)}>
            <li className={styles.item}>
                <ButtonBase onClick={handleOpenModal} className={styles.btn}>
                    <ProfileIcon />
                </ButtonBase>
            </li>
            <li className={styles.item}>
                <ButtonBase onClick={handleOpenSearch} className={styles.btn}>
                    <SearchIcon />
                </ButtonBase>
            </li>
        </ul>
    )
}
