import React from "react";
import ContainerHeader from "./styles";
import LogoVboas from "./../../assets/LogoVboasWhite.png";
import LogoWhatsapp from "./../../assets/WhatsLogo.png";
const Header = () => {
  return (
    <ContainerHeader>
      <div id="sect_mobile_logovboas">
        <img src={LogoVboas} id="mobile-sect" alt="" />
      </div>
      <div id="sect_mobile_linkvboas">
        <a href="#">
          OU LIGUE AGORA! <br /> 15 997022806
          <img src={LogoWhatsapp} alt="" />
        </a>
      </div>
      <div id="sect_mobile_textvboas">
        <h2>
          Parcelamos sua cama <br />
          em até
          <a>12x S/JUROS</a> <br />
          E O PAGAMENTO SÓ É <br />
          FEITO NA HORA DA <br />
          ENTREGA!
        </h2>
      </div>
    </ContainerHeader>
  );
};

export default Header;
