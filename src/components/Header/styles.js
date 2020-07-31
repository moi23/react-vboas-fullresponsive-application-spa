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
  margin: auto 100px auto 100px;
  height: 1920;
  background: ${backgroundHeader};
`;

export default ContainerHeader;
