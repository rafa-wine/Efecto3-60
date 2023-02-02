import React, { useState } from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import { BurgerVeggie as Burger } from "react-burger-icons";
import logo from "../assets/efecto360_white.png";

function Layout() {
  function scrollMain() {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }

  const [isClosed, setIsClosed] = useState(false);
  const toggleClosed = () => setIsClosed(!isClosed);

  let activeStyle = {
    transition: "0.3s",
    color: "var(--woodsmoke)",
    backgroundColor: "var(--goldenrod)",
    padding: "0px 15px 0px 15px",
    borderRadius: 12,
    fontSize: "15px",
  };

  let activeStyleOff = {
    transition: "0.3s",
    color: "#242738",
    backgroundColor: "transparent",
    padding: "0px",
    borderRadius: 0,
    fontSize: "14px",
  };

  let activeStyleAbout = {
    transition: "0.3s",
    color: "#000",
  };

  return (
    <div>
      <header>
        <div className="menu-container">
          <div className="header-container">
            <div className="logo-container">
              <Link className="logo" to="/">
                Mantequilla
                {/* <span className="color-blue">3</span>
                <span className="color-red">'</span>
                <span className="color-blue">60</span> */}
              </Link>
            </div>
            <div className="options-container">
              <NavLink
                to="/aboutus"
                style={({ isActive }) =>
                  isActive ? activeStyleAbout : undefined
                }
                className="button-contact "
              >
                ¿Quiénes somos?
              </NavLink>
              <button
                type="button"
                className="button-menu"
                onClick={toggleClosed}
              >
                <Burger isClosed={isClosed} />
              </button>
            </div>
          </div>
          <div className="section-container container">
            <NavLink
              to="/"
              className="nav-link"
              style={({ isActive }) =>
                isActive ? activeStyle : activeStyleOff
              }
            >
              Inicio
            </NavLink>
            <NavLink
              to="/list_articles/1"
              className="nav-link"
              style={({ isActive }) =>
                isActive ? activeStyle : activeStyleOff
              }
            >
              Explorando
            </NavLink>
            <NavLink
              to="/list_articles/2"
              className="nav-link"
              style={({ isActive }) =>
                isActive ? activeStyle : activeStyleOff
              }
            >
              Modo avión
            </NavLink>
            <NavLink
              to="/list_articles/3"
              className="nav-link"
              style={({ isActive }) =>
                isActive ? activeStyle : activeStyleOff
              }
            >
              Smart things
            </NavLink>
            <NavLink
              to="/list_articles/4"
              className="nav-link"
              style={({ isActive }) =>
                isActive ? activeStyle : activeStyleOff
              }
            >
              Newbies
            </NavLink>
            <NavLink
              to="/list_articles/5"
              className="nav-link"
              style={({ isActive }) =>
                isActive ? activeStyle : activeStyleOff
              }
            >
              Tips
            </NavLink>
            <NavLink
              to="/list_articles/6"
              className="nav-link"
              style={({ isActive }) =>
                isActive ? activeStyle : activeStyleOff
              }
            >
              Estilo
            </NavLink>
            <NavLink
              to="/list_articles/7"
              className="nav-link"
              style={({ isActive }) =>
                isActive ? activeStyle : activeStyleOff
              }
            >
              Melancolía
            </NavLink>
          </div>
        </div>
      </header>
      <Outlet />
      <footer className="container-footer">
        <div className="fooder-links-container">
          <div className="title-footer-section">
            <p className="text-title-fooder-section">Enlaces:</p>
          </div>
          <ul className="fooder-list-links">
            <li className="footer-links">
              <Link to="list_articles/1" className="footer-link">
                Explorando
              </Link>
            </li>
            <li className="footer-links">
              <Link to="list_articles/2" className="footer-link">
                Modo avión
              </Link>
            </li>
            <li className="footer-links">
              <Link to="list_articles/3" className="footer-link">
                Smart things
              </Link>
            </li>
            <li className="footer-links">
              <Link to="list_articles/4" className="footer-link">
                Newbies
              </Link>
            </li>
            <li className="footer-links">
              <Link to="list_articles/5" className="footer-link">
                Tips
              </Link>
            </li>
            <li className="footer-links">
              <Link to="list_articles/6" className="footer-link">
                Estilo
              </Link>
            </li>
            <li className="footer-links">
              <Link to="list_articles/7" className="footer-link">
                Melancolía
              </Link>
            </li>
            <li className="footer-links">
              <Link to="/aboutus" className="footer-link">
                ¿Quiénes somos?
              </Link>
            </li>
          </ul>
        </div>
        {/* <div className="container-social">
          <div>
            <h1>Mantente conectado</h1>
            <div className="container-pharse">
              <p>Síguenos en nuestras redes y dale un vistazo </p>
              <p>a lo que te importa</p>
            </div>
          </div>
          <div className="container-icons">
            <ul className="list-social">
              <li className="social-link">
                <a
                  href="https://www.facebook.com/profile.php?id=100066753159439"
                  className="social-link-a"
                >
                  <i className="ri-facebook-circle-line config-icon"></i>
                </a>
              </li>
              <li className="social-link">
                <a
                  href="https://www.instagram.com/zagazine._/"
                  className="social-link-a"
                >
                  <i className="ri-instagram-line config-icon"></i>
                </a>
              </li>
              <li className="social-link">
                <a
                  href="https://www.youtube.com/channel/UCAL9hCTUTE3Y5MGVOxhJQzg"
                  className="social-link-a"
                >
                  <i className="ri-youtube-line config-icon"></i>
                </a>
              </li>
            </ul>
          </div>
        </div> */}
        <div className="container-copyright">
          <img
            src={logo}
            alt="logo"
            className="footer-logo"
            onClick={scrollMain}
          />
          <p className="text-copyright">
            © Efecto 3'60 2022. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
