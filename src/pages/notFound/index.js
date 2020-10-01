import React from "react";
import { Link } from "react-router-dom";
import AiOutlineArrowLeft from "@meronex/icons/ai/AiOutlineArrowLeft";

import { CARD, COL, TEXT } from "./styles";

export default function NotFound() {
  return (
    <COL sm="12" md="10" lg="8" xl="6">
      <CARD>
        <Link to={{ pathname: "/heroes" }}>
          <TEXT pointer color="#ea0009" fontW="200" fontS="70">
            <AiOutlineArrowLeft size={40} color="#ea0009" /> 
            Page not found, return to the heroes!
          </TEXT>
        </Link>
      </CARD>
    </COL>
  );
}

