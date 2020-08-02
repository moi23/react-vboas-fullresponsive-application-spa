import React from "react";
import ContainerHeader from "./styles";
import "@brainhubeu/react-carousel/lib/style.css";
import Carousel, { autoplayPlugin } from "@brainhubeu/react-carousel";

import LogoVboas from "./../../assets/LogoVboasWhite.png";
import LogoVboasWhite from "./../../assets/vboas_slogan_white.png";
import LogoWhatsapp from "./../../assets/WhatsLogo.png";

import LinkWhats from "./../../assets/linkWhats.png";
import LinkMessenger from "./../../assets/linkMsg.png";
import LinkTell from "./../../assets/linkTell.png";

import Item1 from "../../assets/SHOP_CAMA.png";
import Item2 from "../../assets/SHOP_CAMA2.png";
import Item3 from "../../assets/SHOP_CAMA3.png";

const Header = () => {
  return (
    <ContainerHeader>
      <div className="sect_main_header">
        {/* MOBILE SECTION \/ */}
        <div className="sect_mobile">
          <div id="sect_mobile_logovboas">
            <img src={LogoVboas} id="mobile-sect" alt="" />
          </div>
          <div id="sect_mobile_linkvboas">
            <a href="#">
              OU LIGUE AGORA! <br /> 15 99702 - 2806
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
          <div id="sect_mobile_carouselvboas">
            <Carousel
              plugins={[
                "infinite",
                {
                  resolve: autoplayPlugin,
                  options: {
                    interval: 10,
                  },
                },
              ]}
              animationSpeed={1000}
            >
              <div className="caroulselbox">
                <img src={Item1} />
                <br />
                <a
                  href="https://api.whatsapp.com/send?phone=5515997022806&text=Ol%C3%A1%2C%20Vim%20pelo%20site%20VBOAS%20tenho%20interesse%20em%20realizar%20uma%20compra!%20(conjugada%20casal)"
                  target="_blank"
                >
                  <button>MAIS INFORMAÇÕES</button>
                </a>
              </div>
              <div className="caroulselbox">
                <img src={Item2} />
                <br />
                <a
                  href="https://api.whatsapp.com/send?phone=5515997022806&text=Ol%C3%A1%2C%20Vim%20pelo%20site%20VBOAS%20tenho%20interesse%20em%20realizar%20uma%20compra!%20(conjugada%20casal)"
                  target="_blank"
                >
                  <button>MAIS INFORMAÇÕES</button>
                </a>
              </div>
              <div className="caroulselbox">
                <img src={Item3} />
                <br />
                <a
                  href="https://api.whatsapp.com/send?phone=5515997022806&text=Ol%C3%A1%2C%20Vim%20pelo%20site%20VBOAS%20tenho%20interesse%20em%20realizar%20uma%20compra!%20(conjugada%20casal)"
                  target="_blank"
                >
                  <button>MAIS INFORMAÇÕES</button>
                </a>
              </div>
            </Carousel>
          </div>
          <div id="sect_mobile_social_links">
            <a href="https://api.whatsapp.com/send?phone=5515997022806&text=Ol%C3%A1%2C%20Vim%20pelo%20site%20VBOAS%20tenho%20interesse%20em%20realizar%20uma%20compra!">
              <img
                src={LinkWhats}
                id="logoWhats"
                alt="Link para Whatsapp Mobile"
              />
            </a>
            <a href="http://m.me/moises.miranda.52/">
              <img src={LinkMessenger} id="logoMessenger" alt="" />
            </a>
            <a href="tel:15997022806">
              <img src={LinkTell} id="logoTelefone" alt="" />
            </a>
          </div>
        </div>
        <div className="sect_desktop">
          <p>Simples, Rápido e Seguro!</p>
          <h1>
            Escolha sua cama pelo site <br /> Parcele em até 12x sem júros
          </h1>
          <h2>
            Escolha agora sua cama pelo site e pague <br /> somente na hora da
            entrega!
          </h2>
          <button>
            <a href="#">Saiba Mais</a>
          </button>
          <br />
          <img src={LogoVboasWhite} alt="" />
        </div>
      </div>
    </ContainerHeader>
  );
};

export default Header;
