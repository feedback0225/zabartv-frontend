import { Button } from '@/UI/Button/Button';
import { RoutesEnum } from '@/constants/routes';
import { SubscriptionIcon, MenuIcon } from '@/icons';
import { Nav, ThemeToggle, Lang, Actions } from './components/index'
import { ButtonBase } from '@/components/ButtonBase/ButtonBase';
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
                    <Link href={RoutesEnum.Subscription} passHref>
                        <Button
                            as='link'
                            size='small'
                            gradient
                            className={styles.btn}
                            icon={<SubscriptionIcon />}
                        >
                            Оформить подписку
                        </Button>
                    </Link>
                    <ButtonBase className={styles.burger}>
                        <MenuIcon />
                    </ButtonBase>
                </div>
                <Lang />
                <ThemeToggle />
            </div>
        </header>
    )
}
