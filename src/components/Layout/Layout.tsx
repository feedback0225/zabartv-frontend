import { FC, PropsWithChildren } from "react"
import { Header } from "@/components/Header/Header"
import { Footer } from "../Footer/Footer"
import styles from './Layout.module.scss'
import classNames from "classnames";

interface LayoutProps {
    absoluteHeader?: boolean;
}

export const Layout: FC<PropsWithChildren<LayoutProps>> = ({children, absoluteHeader}) => {
    return (
        <div className={classNames(absoluteHeader ? styles.absolute : styles.container)}>
            <Header absoluteHeader={absoluteHeader} />
            <main className='main'>
                {children}
            </main>
            <Footer />
        </div>
    )
}