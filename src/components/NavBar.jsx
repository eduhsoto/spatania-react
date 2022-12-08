import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="nav__container">
        <NavLink to="/">
          <img
            src="./src/assets/img/brand-logo.jpg"
            alt="brand_logo"
            className="brand__logo"
          />
        </NavLink>

        <div class="nav__hamburger">
          <span className="lines line_1"></span>
          <span className="lines line_2"></span>
          <span className="lines line_3"></span>
          <span className="lines line_4"></span>
        </div>

        <div className="nav__responsive">
          <div className="nav__item">
            <NavLink to="/" className="item active__page">
              Acerca de mí
            </NavLink>
            <NavLink to="/my-path" className="item">
              Mi trayectoria
            </NavLink>
            <NavLink to="/portafolio" className="item">
              Mi portafolio
            </NavLink>
          </div>

          <div className="social__network">
            <a
              href="https://www.instagram.com/tikichi_jimarq/"
              className="social"
              target="_blank"
            >
              <img
                src="./src/assets/img/instagram-network.png"
                alt="instagram link"
                className="social__image"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/tania-jimenezm/"
              className="social"
              target="_blank"
            >
              <img
                src="./src/assets/img/linkedIn-network.png"
                alt="linkedin link"
                className="social__image"
              />
            </a>
            <a
              href="https://www.behance.net/taniaRjimenez"
              className="social"
              target="_blank"
            >
              <img
                src="./src/assets/img/behance-portafolio.png"
                alt="behance link"
                className="social__image"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
