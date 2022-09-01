import { Link } from '@/UI/Link/Link'
import { NotFoundIcon } from '@/icons'
import classNames from 'classnames'
import styles from './NotFound.module.scss'

export const NotFound = () => {
    return (
        <section className={styles.section}>
            <div className={classNames('container', styles.container)}>
                <div className={styles.image}>
                    <NotFoundIcon />
                </div>
                <p className={styles.desc}>Такой страницы существует или адрес введен не верно</p>
                <Link href='/'>Вернуться на главную</Link>
            </div>
        </section>
    )
}