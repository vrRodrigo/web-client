import { Link } from "react-router-dom";

import './Navbar.scss';

export const Navbar = () => {
    return (
        <div>
            <ul className="nav">
                <li className="nav-item slam-left"><Link to="/">Home</Link></li>
                <li className="nav-item"><Link to="/cadastra-user">Cadastrar Usuário</Link></li>
                <li className="nav-item"><a className="contact" href="#">-</a></li>
            </ul>
        </div>
    );
}