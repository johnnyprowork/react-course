import "./header-styles.sass";
import Logo from "./Logo";
import CartWidget from "./CartWidget";
const Header = () => {

    return <header>
        {/* <h1>E-Commerce de tienda de zapatos de baloncesto</h1> */}
        <nav>
            <ul className="container-nav">
                <Logo></Logo>
                <li><a className="style-a" href="#">Inicio</a></li>
                <li><a className="style-a" href="#">Productos</a></li>
                <li><a className="style-a" href="#">Acerca de nosotros</a></li>
                <li><a className="style-a" href="#">Descuentos</a></li>
                <li><a className="style-a" href="#">Blogs</a></li>
                <li className="style-icon"><a href="#"><CartWidget></CartWidget></a></li>
            </ul>
        </nav>
    </header>
    
}

export default Header;