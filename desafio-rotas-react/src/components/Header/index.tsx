import './styles.css';
import { Link, NavLink } from 'react-router-dom';
import homeImg  from '../../assets/images/home.png';

export default function Header() {

    return (
        <header>
            <div className="header-content-container container">
                <nav className="navbar">
                    <div>
                        <NavLink to="/home" className={({isActive}) => isActive ? "menu-item menu-active" : "menu-item" } >
                            Início
                        </NavLink>
                        <NavLink to="/products" className={({isActive}) => isActive ? "menu-item menu-active" : "menu-item" } >
                            Produtos
                        </NavLink>
                        <NavLink to="/about" className={({isActive}) => isActive ? "menu-item menu-active" : "menu-item" } >
                            Sobre nós
                        </NavLink>
                    </div>
                    <Link to="/">
                    <img src={homeImg} alt="Img-home da nav bar" />
                    </Link>
                </nav>
            </div>
        </header>
    );
}
