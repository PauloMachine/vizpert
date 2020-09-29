import styled from 'styled-components';
import { Button, Container } from 'reactstrap';

import Form from '../../components/Form';

export const BUTTON = styled(Button)`
   background-color: #ea0009 !important;
   border: none !important;
`;

export const CONTAINER = styled(Container)`
   padding-right: 0px !important;
   padding-left: 0px !important;
`;

export const CONTENT = styled(Container)`
   display: flex;
   align-items: center;
   justify-content: center;

   padding-right: 0px !important;
   padding-left: 0px !important;

   height: 350px;
   margin-bottom: 50px;
`;

export const INFO = styled(Container)`
   padding-right: 0px !important;
   padding-left: 0px !important;

   display: flex;
   align-items: center;
   justify-content: space-between;
`;

export const DIV = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   width: 100%;
`;

export const FORM = styled(Form)`
   display: flex;
   align-items: center;
   justify-content: center;

   border-radius: 50px;
   border: 2px solid #ea0009;
   background-color: rgba(255, 255, 255, 0.1);

   button {
      margin: 3px;
      border-radius: 50px;
   }
`;

export const TEXT = styled.h4`
   font-weight: ${props => props.fontW};
   font-size: ${props => props.fontS};
   color: ${props => props.color};
`;


