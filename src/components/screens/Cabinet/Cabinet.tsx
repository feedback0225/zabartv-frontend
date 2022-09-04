import { Avatar, SubscribeInfo, Settings, Favourites } from './components/index'
import { MailIcon } from '@/icons'
import classNames from 'classnames'
import styles from './Cabinet.module.scss'
import { Tabs } from '@/UI/Tabs/Tabs'
import { useTypedSelector } from '@/hooks/useTypedSelector'

export const Cabinet = () => {

    const {name, email} = useTypedSelector(state => state.userReducer)

    const info = {
        title: "30 дней за",
        price: "12€",
        desc: "Следующая оплата 22.09.22",
    }

    const tabs = [
        {txt: 'Настройки', content: <Settings />},
        {txt: 'Избранное', content: <Favourites />}
    ]

    return (
        <section className={styles.section}>
            <div className={classNames('container', styles.container)}>
                <div className={styles.top}>
                    <div className={styles.left}>
                        <Avatar name={name} />
                        <div className={styles.text}>
                            <h1 className={styles.name}>{name}</h1>
                            <span className={styles.mail}>
                                <MailIcon />
                                {email}
                            </span>
                        </div>
                    </div>
                    <SubscribeInfo info={info} />
                </div>
                <Tabs tabs={tabs} />
            </div>
        </section>
    )
}
