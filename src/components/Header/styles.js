import styled from "styled-components";
import backgroundHeader from "../../assets/Background4.png";
const ContainerHeader = styled.header`
  :root {
    font-size: 10px;
  }
  * {
    font-size: 10px;
    font-weight: bold;
    list-style: none;
    text-decoration: none;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
  }
  height: 1920px;
  background-image: url(${backgroundHeader});
  background-repeat: no-repeat;
  background-size: contain;

  #mobile-sect {
    display: none;
  }

  #sect_mobile_linkvboas {
    display: none;
  }
  #sect_mobile_textvboas {
    display: none;
  }

  /* CELULARES 590 ATÉ 300 */
  @media only screen and (max-width: 590px) {
    height: 100vh;
    background-size: cover;
    background-position-x: -88px;

    #sect_mobile_logovboas {
      display: flex;
      justify-content: center;
      padding-top: 6%;
      #mobile-sect {
        display: inline-block;
        height: 43px;
      }
    }
    #sect_mobile_linkvboas {
      display: flex;
      justify-content: center;
      padding-top: 17px;
      /* background: red; */

      a {
        color: white;
        font-size: 1.1rem;
        font-weight: 100;
        padding: 10px;

        &:hover {
          /* background: red; */
          transition-delay: 0.2s;
          transition: 2s;
          border: solid 2px white;
        }

        img {
          height: 20px;
          margin-left: 10px;
        }
      }
    }

    #sect_mobile_textvboas {
      display: flex;
      justify-content: center;
      color: white;
      padding-top: 15px;

      h2 {
        font-weight: 100;
        font-size: 1.6rem;
      }
      a {
        font-weight: 100;
        font-size: 1.6rem;
        color: yellow;
        letter-spacing: 2px;
        margin-left: 5px;
      }
    }
  }
`;

export default ContainerHeader;
