import './styles.css';
import 'bootstrap/js/src/collapse.js';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className=" navbar navbar-expand-md navbar-dark bg-primary main-nav">
      <div>
    
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#dscatalog-navbar"
          aria-controls="dscatalog-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="dscatalog-navbar">
          <ul className="navbar-nav offset-md-1 main-menu">
            <li>
              <NavLink to={'/'} activeClassName="active" className="space" exact>HOME</NavLink>
            </li>
            <li>
              <NavLink to={'/concepts'} activeClassName="active" className="space">Conceitos</NavLink>
            </li>
            <li>
              <NavLink to={'/html'} activeClassName="active" className="space">HTML</NavLink>
            </li>
            <li>
              <NavLink to={'/css'} activeClassName="active" className="space">CSS</NavLink>
            </li>
            <li>
              <NavLink to={'/bootstrap'} activeClassName="active" className="space">BootStrap</NavLink>
            </li>
            <li>
              <NavLink to={'/javascript'} activeClassName="active" className="space">JavaScript</NavLink>
            </li>
            <li>
              <NavLink to={'/react-native'} activeClassName="active" className="space">ReactNative</NavLink>
            </li>
            <li>
              <NavLink to={'/react-js'} activeClassName="active" className="space">React</NavLink>
            </li>
            <li>
              <NavLink to={'/java'} activeClassName="active" className="space">Java</NavLink>
            </li>
            <li>
              <NavLink to={'/react-native'} activeClassName="active" className="space">SQL</NavLink>
            </li>
            <li>
              <NavLink to={'/react-native'} activeClassName="active" className="space">Arquiteturas</NavLink>
            </li>
            <li>
              <NavLink to={'/spring-boot'} activeClassName="active" className="space">SpringBoot</NavLink>
            </li>
            <li>
              <NavLink to={'/angular'} activeClassName="active" className="space">Angular</NavLink>
            </li>
            <li>
              <NavLink to={'/unity'} activeClassName="active" className="space">Unity</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;