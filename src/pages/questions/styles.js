import styled from "styled-components";
import { Button, Card, Col } from "reactstrap";

// Components
import Form from "../../components/Form";
import Input from "../../components/Input/InputBasic";

export const FORM = styled(Form)`
  div.form-group {
    border-bottom: 1px solid #52616a !important;
  }
`;

export const INPUT = styled(Input)`
  background: transparent !important;
  color: #00020e !important;
  width: auto !important;

  ::-webkit-input-placeholder {
    color: #00020e;
  }

  :-moz-placeholder {
    /* Firefox 18- */
    color: #00020e;
  }

  ::-moz-placeholder {
    /* Firefox 19+ */
    color: #00020e;
  }

  :-ms-input-placeholder {
    color: #00020e;
  }
`;

export const BUTTON = styled(Button)`
  background-color: #ea0009 !important;
  border: none !important;
  color: #fff !important;
  height: 70px;
  width: 100%;
`;

export const CARD = styled(Card)`
  border-bottom-left-radius: 50px !important;
  border-top-right-radius: 50px !important;
  background-color: #fff !important;
  border: none !important;
  padding: 30px;
`;

export const COL = styled(Col)``;

export const DIV = styled.div``;

export const IMG = styled.img``;
