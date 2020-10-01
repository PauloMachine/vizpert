import styled from "styled-components";
import { Card, Col } from "reactstrap";

export const CARD = styled(Card)`
  background-color: transparent !important;
  height: 100% !important;
  margin: 25px !important;
  width: 100% !important;
  z-index: 1 !important;

  @media (max-width: 520px) {
    height: 200px !important;
  }
`;

export const TEXT = styled.h4`
  font-weight: ${(props) => props.fontW};
  font-size: ${(props) => `${props.fontS - 25}px`};
  color: ${(props) => props.color};

  @media (max-width: 520px) {
    font-size: ${(props) => `${props.fontS - 25}px`};
  }
`;

export const COL = styled(Col)``;
