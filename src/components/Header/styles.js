import styled from "styled-components";
import backgroundHeader from "../../assets/Background4.png";
const ContainerHeader = styled.header`
  :root {
    font-size: 10px;
  }
  * {
    font-size: 10px;
    list-style: none;
    text-decoration: none;
    font-family: "Roboto", sans-serif;
  }

  .sect_main_header {
    height: 100vh;
    background-image: url(${backgroundHeader});
    background-repeat: no-repeat;
    background-size: contain;

    h2,
    h1,
    p,
    a {
      color: white;
    }
  }

  #mobile-sect {
    display: none;
  }

  #sect_mobile_linkvboas {
    display: none;
  }
  #sect_mobile_textvboas {
    display: none;
  }

  #sect_mobile_carouselvboas {
    display: none;
  }

  /* CELULARES 590 ATÉ 300 */
  @media only screen and (max-width: 590px) {
    height: 100vh;
    background-size: cover;
    background-position-x: -88px;

    .sect_desktop {
      display: none;
    }

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

    #sect_mobile_carouselvboas {
      display: flex;
      margin-top: 30px;

      img {
        height: 300px;
      }
      .caroulselbox {
        button {
          color: white;
          padding: 20px;
          width: 300px;
          background: #00b725;
          border: none;
          font-size: 1rem;
          cursor: pointer;
          letter-spacing: 3px;

          &:hover {
            background: none;
            border: solid 2px white;
            transition: 0.3s;
          }
        }
      }
    }
  }

  /* SECTION TELEVISÃO 4K ~~ TELAS ULTRAWIDE */
  @media only screen and (min-width: 2560px) {
    .sect_main_header {
      height: 88vh;
      background-image: url(${backgroundHeader});
      background-repeat: no-repeat;
      background-size: cover;
    }
    .sect_desktop {
      margin-left: 98px;
      padding-top: 170px;
      @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

      p {
        color: white;
        font-size: 31px;
        font-weight: 100;
        padding-bottom: 20px;
      }
      h1 {
        color: white;
        font-size: 66px;
        font-weight: 100;
        padding-bottom: 20px;
      }
      h2 {
        color: white;
        font-size: 44px;
        font-weight: lighter;
        font-family: "Roboto", sans-serif;
      }
      button {
        height: 100px;
        width: 400px;
        background: #00b725;
        border-radius: 20px;
        border: solid 5px white;
        margin-top: 40px;
        margin-bottom: 40px;
        a {
          color: white;
          font-size: 44px;
          text-transform: uppercase;
          letter-spacing: 4px;
        }
      }

      img {
        width: 400px;
      }
    }
  }

  /* SECTION NOTEBOOK 1920 X 1080 */
  @media only screen and (min-width: 1920px) {
    .sect_main_header {
      height: 88vh;
      background-image: url(${backgroundHeader});
      background-repeat: no-repeat;
      background-size: cover;
    }
    .sect_desktop {
      margin-left: 98px;
      padding-top: 170px;
      @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

      p {
        color: white;
        font-size: 31px;
        font-weight: 100;
        padding-bottom: 20px;
      }
      h1 {
        color: white;
        font-size: 66px;
        font-weight: 100;
        padding-bottom: 20px;
      }
      h2 {
        color: white;
        font-size: 44px;
        font-weight: lighter;
        font-family: "Roboto", sans-serif;
      }
      button {
        height: 100px;
        width: 400px;
        background: #00b725;
        border-radius: 20px;
        border: solid 5px white;
        margin-top: 40px;
        margin-bottom: 40px;
        a {
          color: white;
          font-size: 44px;
          text-transform: uppercase;
          letter-spacing: 4px;
        }
      }

      img {
        width: 400px;
      }
    }
  }

  /* SECTION NOTEBOOK 1920 X 1080 */
  @media only screen and (min-width: 1440px) {
    .sect_main_header {
      height: 88vh;
      background-image: url(${backgroundHeader});
      background-repeat: no-repeat;
      background-size: cover;
    }
    .sect_desktop {
      margin-left: 98px;
      padding-top: 170px;
      @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

      p {
        color: white;
        font-size: 31px;
        font-weight: 100;
        padding-bottom: 20px;
      }
      h1 {
        color: white;
        font-size: 66px;
        font-weight: 100;
        padding-bottom: 20px;
      }
      h2 {
        color: white;
        font-size: 44px;
        font-weight: lighter;
        font-family: "Roboto", sans-serif;
      }
      button {
        height: 100px;
        width: 400px;
        background: #00b725;
        border-radius: 20px;
        border: solid 5px white;
        margin-top: 40px;
        margin-bottom: 40px;
        a {
          color: white;
          font-size: 44px;
          text-transform: uppercase;
          letter-spacing: 4px;
        }
      }

      img {
        width: 400px;
      }
    }
  }

  /* SECTION NOTEBOOK 1440 X 900 */
  @media only screen and (min-width: 1440px) {
    .sect_main_header {
      height: 88vh;
      background-image: url(${backgroundHeader});
      background-repeat: no-repeat;
      background-size: cover;
    }
    .sect_desktop {
      margin-left: 98px;
      padding-top: 115px;
      @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

      p {
        color: white;
        font-size: 24px;
        font-weight: 100;
        padding-bottom: 20px;
      }
      h1 {
        color: white;
        font-size: 51px;
        font-weight: 100;
        padding-bottom: 20px;
      }
      h2 {
        color: white;
        font-size: 30px;
        font-weight: lighter;
        font-family: "Roboto", sans-serif;
      }
      button {
        height: 85px;
        width: 333px;
        background: #00b725;
        border-radius: 20px;
        border: solid 5px white;
        margin-top: 40px;
        margin-bottom: 40px;
        a {
          color: white;
          font-size: 36px;
          text-transform: uppercase;
          letter-spacing: 4px;
        }
      }

      img {
        width: 336px;
      }
    }
  }

  /* SECTION NOTEBOOK 1024 x 768 */
  @media only screen and (min-width: 1024px) {
    .sect_main_header {
      height: 88vh;
      background-image: url(${backgroundHeader});
      background-repeat: no-repeat;
      background-size: cover;
    }
    .sect_desktop {
      margin-left: 98px;
      padding-top: 115px;
      @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

      p {
        color: white;
        font-size: 24px;
        font-weight: 100;
        padding-bottom: 20px;
      }
      h1 {
        color: white;
        font-size: 51px;
        font-weight: 100;
        padding-bottom: 20px;
      }
      h2 {
        color: white;
        font-size: 30px;
        font-weight: lighter;
        font-family: "Roboto", sans-serif;
      }
      button {
        height: 85px;
        width: 333px;
        background: #00b725;
        border-radius: 20px;
        border: solid 5px white;
        margin-top: 40px;
        margin-bottom: 40px;
        a {
          color: white;
          font-size: 36px;
          text-transform: uppercase;
          letter-spacing: 4px;
        }
      }

      img {
        width: 336px;
      }
    }
  }
`;

export default ContainerHeader;
