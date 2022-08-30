import { ButtonBase } from '@/components/ButtonBase/ButtonBase';
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@/icons'
import styles from './ThemeToggle.module.scss'

export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme()
  
    const toggleTheme = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark')
    }

    return (
        <ButtonBase onClick={toggleTheme} className={styles.btn}>
            <span className={styles.icon}>
                <MoonIcon />
            </span>
            <span className={styles.icon}>
                <SunIcon />
            </span>
        </ButtonBase>
    )
}
