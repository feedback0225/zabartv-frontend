import { ButtonBase } from '@/components/ButtonBase/ButtonBase'
import { ProfileIcon, SearchIcon } from '@/components/Icons/Icons'
import { useActions } from 'src/hooks/useActions'
import classNames from 'classnames'
import styles from './Actions.module.scss'

export const Actions = () => {

    const {setVisible, setShowRegisterModal} = useActions()

    const handleOpenModal = () => setShowRegisterModal(true)

    const handleOpenSearch = () => setVisible(true)

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
