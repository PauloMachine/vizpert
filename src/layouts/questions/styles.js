import styled from "styled-components";
import Background from "../../assets/images/background.jpg";

export const CONTAINER = styled.div`
  background-image: url(${Background});
  background-repeat: no-repeat;
  justify-content: center;
  background-size: cover;
  align-items: center;
  display: flex;
  height: 100vh;
  width: 100%;
`;
