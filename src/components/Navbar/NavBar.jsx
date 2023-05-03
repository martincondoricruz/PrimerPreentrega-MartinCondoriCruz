import './NavBar.css'
import CartWidget from './CartWidget/CartWidget'

const NavBar = () => {
    const img = "https://yt3.googleusercontent.com/3oKdamIlphbSzmsClmTIs1GoiofRiJykIBZEOQEHhvLg_h4C3uUpkb4V6Vc3mugtNYJ3IR5P=s900-c-k-c0x00ffffff-no-rj"
    return (
        <header className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <img className='img' src={img} alt="" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <nav className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            Inicio
                        </li>
                        <li className="nav-item">
                            Calzado
                        </li>
                        <li className="nav-item">
                            Indumentaria
                        </li>
                        <li className="nav-item">
                            Deporte
                        </li>
                    </ul>
                </nav>
                <CartWidget />
            </div>
        </header>
    )
}

export default NavBar