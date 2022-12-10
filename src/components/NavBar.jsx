import {
  Nav,
  NavContainer,
  NavResponsive,
  NavA,
  NavSocial,
} from "../assets/style-components/Nav";

const NavBar = () => {
  return (
    <Nav>
      <NavContainer>
        <a href="/">
          <img src="./src/assets/img/brand-logo.jpg" alt="brand_logo" />
        </a>

        <div className="nav__hamburger">
          <span className="lines line_1"></span>
          <span className="lines line_2"></span>
          <span className="lines line_3"></span>
          <span className="lines line_4"></span>
        </div>

        <NavResponsive>
          <div className="nav__item">
            <NavA to="/">Acerca de mí</NavA>
            <NavA to="/my-path">Mi trayectoria</NavA>
            <NavA to="/portafolio">Mi portafolio</NavA>
          </div>

          <div className="social__network">
            <NavSocial
              href="https://www.instagram.com/tikichi_jimarq/"
              target="_blank"
            >
              <img
                src="./src/assets/img/instagram-network.png"
                alt="instagram link"
              />
            </NavSocial>
            <NavSocial
              href="https://www.linkedin.com/in/tania-jimenezm/"
              target="_blank"
            >
              <img
                src="./src/assets/img/linkedIn-network.png"
                alt="linkedin link"
              />
            </NavSocial>
            <NavSocial
              href="https://www.behance.net/taniaRjimenez"
              target="_blank"
            >
              <img
                src="./src/assets/img/behance-portafolio.png"
                alt="behance link"
              />
            </NavSocial>
          </div>
        </NavResponsive>
      </NavContainer>
    </Nav>
  );
};

export default NavBar;
