import styled from "styled-components";

const ContainerNav = styled.nav`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");

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
  margin: auto 100px auto 100px;
  height: 100px;
  /* background: red; */

  #section_nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* background: gray; */
    height: 50px;
    @media only screen and (max-width: 590px) {
      display: flex;
      justify-content: center;
    }

    #logo_vboas {
      height: 20px;
    }

    #logo_whatsapp {
      height: 30px;
      margin-left: 5px;
    }

    #section_main_nav {
      display: flex;
      align-items: center;

      a {
        font-size: 0.9rem;
        color: black;
      }

      a:hover {
        color: blue;
      }

      @media only screen and (max-width: 590px) {
        display: none;
      }
    }

    ul {
      display: flex;
      li {
        padding: 10px;
        /* background: blue; */
        margin: 3px;

        a {
          font-size: 1rem;
          color: black;
        }
      }
    }
    @media only screen and (max-width: 900px) {
      ul {
        display: none;
      }
    }
  }

  /*****************************************/

  @media screen and (min-width: 1200px) {
  }
`;

export default ContainerNav;
