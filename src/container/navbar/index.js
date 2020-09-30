import React from "react";
import { useDispatch } from "react-redux";
import AiOutlineArrowRight from "@meronex/icons/ai/AiOutlineArrowRight";

import { questionsReturn } from "../../hooks/modules/auth/actions";
import { COL, DIV, INFO, TEXT } from "./styles";

export default function Navbar() {
  const dispatch = useDispatch();

  async function handleSubmit() {
    dispatch(questionsReturn());
  }

  return (
    <COL sm="12" md="12" xl="12" lg="12">
      <INFO>
        <DIV>
          <TEXT color="#ea0009" fontW="200">
            {window.location.pathname.split("/")}
          </TEXT>
        </DIV>
        <TEXT
          pointer
          color="#ea0009"
          fontW="200"
          onClick={() => handleSubmit()}
        >
          return the questions <AiOutlineArrowRight size={20} color="#ea0009" />
        </TEXT>
      </INFO>
    </COL>
  );
}
