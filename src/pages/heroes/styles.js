import styled from 'styled-components';
import { Button, Card, Col, Row } from 'reactstrap';

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
   display: flex !important;
   align-items: center !important;
   flex-direction: row !important;
   justify-content: center !important;
   background-color: transparent !important;
   margin-bottom: 25px !important; 
`;

export const CARDINFO = styled(Card)`
   display: flex !important;
   align-items: center !important;
   flex-direction: column !important;
   justify-content: space-between !important;
   background-color: transparent !important;
   width: 300px !important;
   padding: 30px;
`;

export const IMG = styled.img`
   border: 10px double #fff;
   border-radius: 50%;
   height: 200px;
   width: 200px;
`;

export const ROW = styled(Row)``;

export const TEXT = styled.h4`
   font-weight: ${props => props.fontW};
   font-size: ${props => props.fontS};
   color: ${props => props.color};
`;

export const COL = styled(Col)``;


