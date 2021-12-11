import "./styles.css"

const Header = () => {
    return <header>
        <h1>E-Commerce de tienda de comida para animales</h1>
        <nav>
            <ul class="container-nav">
                <li><a class="style-a" href="#">Alimento</a></li>
                <li><a class="style-a" href="#">Medicamento</a></li>
                <li><a class="style-a" href="#">Descuentos</a></li>
                <li><a class="style-a" href="#">Blogs</a></li>
            </ul>
        </nav>
    </header>
}

export default Header;