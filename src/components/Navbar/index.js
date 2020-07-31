import React from "react";
import LogoVboas from "../../assets/LogoVboas.png";
import LogoWhats from "../../assets/WhatsLogo.png";
import ContainerNav from "./styles";

const Navbar = () => {
  return (
    <ContainerNav>
      <div id="section_nav">
        <img id="logo_vboas" src={LogoVboas} alt="LogoVboas" />
        <div id="section_main_nav">
          <a href="#">OU LIGUE AGORA! 15 - 9999 99999</a>
          <a href="">
            <img id="logo_whatsapp" src={LogoWhats} alt="Whatsapp Logo" />
          </a>
        </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="">Nossos produtos</a>
          </li>
          <li>
            <a href="">Contato</a>
          </li>
        </ul>
      </div>
    </ContainerNav>
  );
};

export default Navbar;
