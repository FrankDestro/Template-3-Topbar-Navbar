
import { Link, NavLink } from 'react-router-dom';
import MenuListComposition from 'Components/MeuPerfil';
import { ReactComponent as LogoIcon } from '../../assets/img/logo.svg';

import './styles.css';

function Navbar() {

  return (
    <>
      <nav className="navbar navbar-expand-md  main-nav" id="testnav">
        <div className="container-fluid">
          <Link to="/home" className="nav-logo-text">
            <div className="container-logo">
             <LogoIcon />
              <h4>Titulo do sistema</h4>
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#grbdashboard-navbar"
            aria-controls="grbdashboard-navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* <div className="collapse navbar-collapse" id="grbdashboard-navbar">
            <ul className="navbar-nav offset-md-3 main-menu">
              <li>
                <NavLink to="/page1" activeClassName="active" exact>
                  Pagina 1
                </NavLink>
              </li>
              <li>
                <NavLink to="/page2" activeClassName="active" exact>
                  Pagina 2
                </NavLink>
              </li>
                <li>
                  <NavLink to="/admin" activeClassName="active" exact>
                    Pagina 3
                  </NavLink>
                </li>
            </ul>
          </div> */}
          <div className="container-options">
            <div className="container-logo">
              <span className="auth-logon-email">usuario@outlook.com </span>
              <MenuListComposition />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
