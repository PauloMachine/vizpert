import styled from "styled-components";
import { Button, Card, Col, Row } from "reactstrap";

export const BUTTON = styled(Button)`
  background-color: #ea0009 !important;
  border: none !important;
  color: #fff !important;
  height: 40px;
  width: 100%;
`;

export const CARD = styled(Card)`
  background-color: transparent !important;
  border: none !important;
  justify-content: center;
`;

export const CARDHERO = styled(Card)`
  background-color: rgba(0, 0, 0, 0.5) !important;
  justify-content: space-between !important;
  align-items: center !important;
  flex-direction: row !important;
  margin-bottom: 25px !important;
  display: flex !important;
  height: 200px !important;
  padding-right: 15px;
  padding-left: 15px;
`;

export const CARDINFO = styled(Card)`
  justify-content: space-between !important;
  background-color: transparent !important;
  flex-direction: column !important;
  align-items: center !important;
  display: flex !important;
  width: 200px !important;
`;

export const IMG = styled.img`
  border-bottom-right-radius: 25% !important;
  border-bottom-right-radius: 25% !important;
  border-top-left-radius: 25% !important;
  border-top-left-radius: 25% !important;
  border: 10px double #fff !important;
  height: 160px !important;
  width: 160px !important;
`;

export const TEXT = styled.h4`
  font-weight: ${(props) => props.fontW};
  font-size: ${(props) => props.fontS};
  color: ${(props) => props.color};
`;

export const ROW = styled(Row)``;

export const COL = styled(Col)``;
