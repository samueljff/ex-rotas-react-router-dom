import { NavLink } from 'react-router-dom';
import './styles.css';

export default function NavBarCategories() {

    return (
        <div className='navbar-categories'>
            <NavLink to="/products/computers" className={({isActive}) => isActive ? "menu-item menu-active" : "menu-item" } >
                <p>Computadores</p>
            </NavLink>
            <NavLink to="/products/electronics" className={({isActive}) => isActive ? "menu-item menu-active" : "menu-item" } >
                <p>Eletrônicos</p>
            </NavLink>
            <NavLink to="/products/books" className={({isActive}) => isActive ? "menu-item menu-active" : "menu-item" } >
                <p>Livros</p>
            </NavLink>
        </div>
    );
}
