import styled from 'styled-components';
import { Button, Card, Col } from 'reactstrap';

export const BUTTON = styled(Button)`
   background-color: #ea0009 !important;
   border: none !important;
   color: #fff !important;
   height: 40px;
   width: 100%;
`;

export const CARD = styled(Card)`
   background-color: transparent !important;
   height: 400px !important;
   margin: 25px !important;
   width: 100% !important;
   z-index: 1 !important;

   @media (max-width: 520px) {
      height: 200px !important;
   }
`;

export const CARDHERO = styled(Card)`
   background-color: rgba(0,0,0,0.5) !important;
   margin: 25px !important; 
   padding: 25px !important;
   width: 100% !important;
   height: 500px !important;
`;

export const CARDINFO = styled(Card)`
   justify-content: space-between !important;
   background-color: transparent !important;
   align-items: flex-start !important;
   flex-direction: column !important;
   flex-wrap: wrap !important;
   display: flex !important;
   width: 100% !important;

   @media (max-width: 520px) {
      font-size: ${props => `${props.fontS - 25}px`};
   }
`;

export const IMG = styled.img`
   border-bottom-right-radius: 25% !important;
   border-top-left-radius: 25% !important;
   border: 10px double #fff !important;
   margin-top: 30px !important;
   height: auto !important;
   width: 50% !important;
`;

export const TEXT = styled.h4`
   font-weight: ${props => props.fontW};
   font-size: ${props => `${props.fontS - 25}px`};
   color: ${props => props.color};

   @media (max-width: 520px) {
      font-size: ${props => `${props.fontS - 25}px`};
   }
`;

export const DIV = styled(Col)`
   justify-content: flex-end !important;
   align-items: flex-end !important;
   flex-direction: row !important;
   display: flex !important;
`;

export const COL = styled(Col)``;


