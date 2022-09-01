
import { RuIcon, CeIcon, ArrowIcon } from '@/icons'
import { useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { useOnClickOutside } from 'usehooks-ts'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import Link from 'next/link'
import classNames from 'classnames'
import styles from './MenuLang.module.scss'
import { ButtonBase } from '@/components/ButtonBase/ButtonBase'

export const MenuLang = () => {

    const { locale, asPath } = useRouter();
    const [ active, setActive ] = useState<boolean>(false)
    const langRef = useRef<HTMLDivElement>(null)
    const {lang} = useTypedSelector(state => state.langReducer)
    const {setLang} = useActions()

    const toggleActive = () => {
        setActive(!active)
    }
    
    useOnClickOutside(langRef, () => setActive(false))

    const items = [
        {icon: <RuIcon />, txt: 'Русский язык', locale: 'ru'},
        {icon: <CeIcon />, txt: 'Чеченский язык', locale: 'ce'},
    ]

    const handleChoice = (lang: string) => {
        setLang(lang)
    }

    return (
        <div ref={langRef} onClick={toggleActive} className={classNames(styles.lang, active && styles.active)}>
            <ul className={classNames('list-reset', styles.list)}>
                {items.map(el => (
                    <li key={el.locale} className={classNames(styles.item, lang === el.locale && styles.selected)}>
                        <ButtonBase onClick={() => handleChoice(el.locale)} className={styles.link}>
                            {el.icon}
                            {el.txt}
                        </ButtonBase>
                    </li>
                ))}
            </ul>
            <span className={styles.arrow}>
                <ArrowIcon />
            </span>
        </div>
    )
}