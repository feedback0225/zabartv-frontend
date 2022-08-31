import { ButtonBase } from '@/components/ButtonBase/ButtonBase'
import { useActions } from '@/hooks/useActions';
import { MenuIcon } from '@/icons';
import styles from './Burger.module.scss'

export const Burger = () => {

    const {showMenu} = useActions()

    const handleShow = () => showMenu(true)

    return (
        <ButtonBase onClick={handleShow} className={styles.burger}>
            <MenuIcon />
        </ButtonBase>
    )
}
