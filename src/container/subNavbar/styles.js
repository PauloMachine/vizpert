import styled from 'styled-components';
import { Button, Col, Row } from 'reactstrap';

import Form from '../../components/Form';

export const BUTTON = styled(Button)`
   background-color: #ea0009 !important;
   border: none !important;
`;

export const FORM = styled(Form)`
   background-color: rgba(0, 0, 0, 0.8);
   border: 2px solid #ea0009;
   justify-content: center;
   align-items: center;
   border-radius: 50px;
   display: flex;

   input {
      color: #fff !important;
   }

   button {
      margin: 3px;
      border-radius: 50px;
   }
`;

export const TEXT = styled.h4`
   font-size: ${props => props.fontS ? `${props.fontS}px` : '20px'};
   text-decoration: ${props => props.pointer && 'underline'};
   cursor: ${props => props.pointer && 'pointer'};
   font-weight: ${props => props.fontW};
   color: ${props => props.color};

   @media (max-width: 520px) {
      font-size: ${props => `${props.fontS - 25}px`};
   }
`;

export const COL = styled(Col)`
   margin-bottom: ${props => props.margin && '100px'};
   margin-top: ${props => props.margin && '30px'};
   justify-content: center !important;
   flex-direction: column !important;
   align-items: center !important;
   display: flex !important;
`;

export const ROW = styled(Row)``;





