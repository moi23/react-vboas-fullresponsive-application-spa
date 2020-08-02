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
          <a href="#">OU LIGUE AGORA! 15 - 99702 2806</a>
          <a href="https://api.whatsapp.com/send?phone=5515997022806&text=Ol%C3%A1%2C%20Vim%20pelo%20site%20VBOAS%20tenho%20interesse%20em%20realizar%20uma%20compra!">
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
