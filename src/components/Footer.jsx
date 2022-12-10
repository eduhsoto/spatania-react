const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer__grid">
          <div className="footer__item area_1">
            <p className="footer__contact">Contacta conmigo en:</p>
          </div>

          <div className="footer__item area_2">
            <img
              src="./src/assets/img/phone-contact.png"
              className="icon__contact"
              alt="phone number"
            />
            <a href="tel:3311387789" className="footer__link">
              33 11 38 77 89
            </a>
          </div>

          <div className="footer__item area_3">
            <a
              href="https://www.linkedin.com/in/tania-jimenezm/"
              target="”_blank”"
              className="footer__button"
            >
              LinkedIn
            </a>
          </div>

          <div className="footer__item area_4">
            <img
              src="./src/assets/img//brand-logo.jpg"
              className="footer__image"
              alt="brand logo"
            />
          </div>

          <div className="footer__item area_5">
            <img
              src="./src/assets/img/email-contact.png"
              className="icon__contact"
              alt="email"
            />
            <a
              href="mailto:taniaraquel.jimenezm@gmail.com"
              className="footer__link"
            >
              taniaraquel.jimenezm@gmail.com
            </a>
          </div>
        </div>
        <div className="rights">
          <p>Copyright Inc. Tania Jiménez Márquez. © 2022</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
