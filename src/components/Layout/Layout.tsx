import { FC, PropsWithChildren } from 'react'
import { Header } from '@/components/Header/Header'
import { Footer } from "@/components/Footer/Footer"
import { Modals } from '@/components/Modals/Modals';
import styles from './Layout.module.scss'
import classNames from 'classnames';

interface LayoutProps {
    absoluteHeader?: boolean;
    withoutFooter?: boolean;
}

export const Layout: FC<PropsWithChildren<LayoutProps>> = ({children, withoutFooter, absoluteHeader}) => {
    return (
        <>
            <div className={classNames(absoluteHeader ? styles.absolute : styles.container)}>
                <Header absoluteHeader={absoluteHeader} />
                <main className='main'>
                    {children}
                </main>
                {!withoutFooter ? <Footer /> : null}
            </div>
            <Modals />
        </>
    )
}