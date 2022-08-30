import { FC, PropsWithChildren } from "react"
import { Header } from "@/components/Header/Header"
import { Footer } from "../Footer/Footer"

export const Layout: FC<PropsWithChildren<{}>> = ({children}) => {
    return (
        <>
            <Header />
            <main className='main'>
                {children}
            </main>
            <Footer />
        </>
    )
}