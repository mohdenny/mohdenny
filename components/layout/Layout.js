import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'

const Layout = ({ children }) => {
    return (
        <div className="bg-dark ">
            <Navbar/>
            { children }
            <Footer/>
        </div>
    )
}

export default Layout;