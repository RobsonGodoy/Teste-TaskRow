import { Footer } from "./Footer/Footer"
import { Header } from "./Header/Header"

export const Layout = ({children}:any) => {
    return (
        <>
            <div>
                <Header/>
                <div>
                    { children }
                </div>
                <Footer/>
            </div>
        </>
    )
}