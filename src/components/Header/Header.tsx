import { Nav, ThemeToggle, Lang, Actions, Menu, Burger } from './components/index'
import { SubscriptionButton } from '@/UI/SubscriptionButton/SubscriptionButton';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.scss';

export const Header = () => {
    
    return (
        <header className={styles.header}>
            <div className={classNames('container', styles.container)}>
                <Link href='/'>
                    <a className={styles.logo}>
                        <Image
                            priority
                            unoptimized
                            layout="fill"
                            quality={100}
                            src='/logo.png'
                            alt="ZabarTV"
                        />
                    </a>
                </Link>
                <Nav />
                <div className={styles.right}>
                    <Actions />
                    <SubscriptionButton className={styles.btn} />
                    <Burger />
                </div>
                <Lang />
                <ThemeToggle className={styles.toggle} />
            </div>
            <Menu />
        </header>
    )
}
