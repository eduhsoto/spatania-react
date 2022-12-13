import { NavHamburger } from "../../assets/style-components/NavBar/Hamburger";

export const Hamburger = ({ handleClick, clicked }) => {
  return (
    <NavHamburger>
      <div
        onClick={handleClick}
        className={`nav__hamburger ${clicked ? "active" : ""}`}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </NavHamburger>
  );
};

export default Hamburger;
