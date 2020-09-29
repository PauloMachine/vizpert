import styled, { css } from 'styled-components';
import { FormGroup, InputGroup, InputGroupText } from 'reactstrap';
import Select from 'react-select';

import PrecisaTooltip from '../../Tooltip';

export const FORMGROUP = styled(FormGroup)`
   background: rgba(255,255,255,0.1) !important;
   border-bottom: 0.5pt solid rgba(0,0,0,0.1);

   /* Se tiver com o foco aplica a cor */
   ${props =>
      props.isfocused &&
      css`
         border-bottom: 2px solid #00020e;
      `}


   /* Se tiver erro aplica cor */
   ${props =>
      props.iserrored &&
      css`
         border-bottom: 2px solid #f00;
      `}

   /* Se tiver valor deixa a cor */
   ${props =>
      props.isfield &&
      css`
         border-bottom: 2px solid #00020e !important;
      `}
`;

export const INPUTGROUP = styled(InputGroup)`
   background: rgba(255, 255, 255, 0.1) !important;
   align-items: center !important;
   display: flex;
`;

export const INPUTGROUPTEXT = styled(InputGroupText)`
   background: transparent !important;
   border-radius: 0 !important;
   padding: 0.625rem 0.75rem;
   border: none !important;
   align-items: center;
   display: flex;
   height: 70px;

   /* Se tiver com o foco aplica a cor */
   ${props =>
      props.isfocused &&
      css`
         svg {
            color: #00020e !important;
         }
      `}


   /* Se tiver erro aplica cor */
   ${props =>
      props.iserrored &&
      css`
         svg {
            color: #f00 !important;
         }
      `}

   /* Se tiver valor deixa a cor */
   ${props =>
      props.isfield &&
      css`
         svg {
            color: #00020e !important;
         }
      `}
`;

export const ERROR = styled(PrecisaTooltip)`
   height: 24px;

   svg {
      margin-right: 0;
   }

   span {
      background: #c53030;
      color: #00020e;
      &::before {
         border-color: #c53030 transparent;
      }
   }
`;

export const LABEL = styled.label`
   font-family: Marvel !important;
   font-weight: 500 !important;
   color: #aaa !important;
   font-size: 14px;

   /* Se tiver com o foco aplica a cor */
   ${props =>
      props.isfocused &&
      css`
         color: #00020e !important;
      `}


   /* Se tiver erro aplica cor */
   ${props =>
      props.iserrored &&
      css`
         color: #f00 !important;
      `}

   /* Se tiver valor deixa a cor */
   ${props =>
      props.isfield &&
      css`
         color: #00020e !important;
      `}
`;

export const SPAN = styled.span`
   margin-left: 5px;
   color: #fda08b;
`;

export const INPUT = styled(Select)``;

export const DIV = styled.div``;