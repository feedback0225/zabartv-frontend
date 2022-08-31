import { ButtonBase } from '@/components/ButtonBase/ButtonBase'
import { useActions } from 'src/hooks/useActions';
import { MenuIcon } from '@/icons';
import styles from './Burger.module.scss'

export const Burger = () => {

    const {toggleMenu} = useActions()

    const handleShow = () => toggleMenu(true)

    return (
        <ButtonBase onClick={handleShow} className={styles.burger}>
            <MenuIcon />
        </ButtonBase>
    )
}
