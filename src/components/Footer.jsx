const Footer = () => {
  return (
    <>
      <footer>
        <div class="footer__grid">
          <div class="footer__item area_1">
            <p class="footer__contact">Contacta conmigo en:</p>
          </div>

          <div class="footer__item area_2">
            <img
              src="./src/assets/img/phone-contact.png"
              class="icon__contact"
              alt="phone number"
            />
            <a href="tel:3311387789" class="footer__link">
              33 11 38 77 89
            </a>
          </div>

          <div class="footer__item area_3">
            <a
              href="https://www.linkedin.com/in/tania-jimenezm/"
              target="”_blank”"
              class="footer__button"
            >
              LinkedIn
            </a>
          </div>

          <div class="footer__item area_4">
            <img
              src="./src/assets/img//brand-logo.jpg"
              class="footer__image"
              alt="brand logo"
            />
          </div>

          <div class="footer__item area_5">
            <img
              src="./src/assets/img/email-contact.png"
              class="icon__contact"
              alt="email"
            />
            <a
              href="mailto:taniaraquel.jimenezm@gmail.com"
              class="footer__link"
            >
              taniaraquel.jimenezm@gmail.com
            </a>
          </div>
        </div>
        <div class="rights">
          <p>Copyright Inc. Tania Jiménez Márquez. © 2022</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
