
import { RuIcon, RbIcon, ArrowIcon } from '@/icons'
import { useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { useOnClickOutside } from 'usehooks-ts'
import Link from 'next/link'
import classNames from 'classnames'
import styles from './Lang.module.scss'

export const Lang = () => {

    const { locale, asPath } = useRouter();
    const [ active, setActive ] = useState<boolean>(false)
    const langRef = useRef<HTMLDivElement>(null)

    const toggleActive = () => {
        setActive(!active)
    }
    
    useOnClickOutside(langRef, () => setActive(false))
    
    const items = [
        {icon: <RuIcon />, locale: 'ru'},
        {icon: <RbIcon />, locale: 'be'},
    ]

    return (
        <div ref={langRef} onClick={toggleActive} className={classNames(styles.lang, active && styles.active)}>
            <ul className={classNames('list-reset', styles.list)}>
                {items.map(el => (
                    <li key={el.locale} className={classNames(styles.item, locale === el.locale && styles.selected)}>
                        <Link
                            href={asPath}
                            locale={el.locale}
                        >
                            <a className={styles.link}>
                                {el.icon}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
            <span className={styles.arrow}>
                <ArrowIcon />
            </span>
        </div>
    )
}