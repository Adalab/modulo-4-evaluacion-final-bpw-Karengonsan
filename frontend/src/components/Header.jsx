import "react";
import "../styles/header.css"

const Header = () => {
  return (
    <>
      <img className="header__icon" src="./cena.png" alt="" aria-hidden="true"/>
      <h2>¡Busca nuestras recetas y disfruta!</h2>
    </>
  );
};

export default Header;
