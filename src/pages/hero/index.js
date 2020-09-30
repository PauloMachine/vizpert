import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import AiOutlineArrowLeft from "@meronex/icons/ai/AiOutlineArrowLeft";
import maskDate from "../../utils/functions/maskDate";

import { CARD, CARDHERO, CARDINFO, COL, DIV, IMG, TEXT } from "./styles";

export default function Hero({ location }) {
  const { hero, typeLike } = location.state;

  return (
    <COL key={`${hero.id}`} sm="12" md="10" lg="8" xl="6">
      <CARD>
        <Link to={{ pathname: "/heroes" }}>
          <TEXT pointer color="#ea0009" fontW="200" fontS="45">
            <AiOutlineArrowLeft size={20} color="#ea0009" /> return to the
            heroes
          </TEXT>
        </Link>
        <DIV>
          <IMG
            alt={`${hero.name}`}
            src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
          />
        </DIV>
      </CARD>
      <CARDHERO className="mt--5">
        <CARDINFO>
          <TEXT color="#fff" fontW="900" fontS="70">
            {hero.name}
          </TEXT>
          <TEXT color="#fff" fontW="700" fontS="50">
            Modified: {maskDate(new Date(hero.modified))}
          </TEXT>
          {typeLike === "series" && (
            <TEXT color="#fff" fontW="600" fontS="50">
              Series: {hero.series.available}
            </TEXT>
          )}
          {typeLike === "stories" && (
            <TEXT color="#fff" fontW="600" fontS="50">
              Stories: {hero.stories.available}
            </TEXT>
          )}
          <TEXT color="#fff" fontW="600" fontS="10">
            {(typeLike === "series" && hero.series.available) ||
              (typeLike === "stories" && hero.stories.available
                ? "Some examples:"
                : "No examples")}
          </TEXT>
          {typeLike === "series" &&
            hero.series.items.map(
              (serie, index) =>
                index <= 4 && (
                  <TEXT key={serie.id} color="#fff" fontW="100" fontS="45">
                    {" "}
                    - {serie.name}
                  </TEXT>
                )
            )}
          {typeLike === "stories" &&
            hero.stories.items.map(
              (storie, index) =>
                index <= 4 && (
                  <TEXT key={storie.id} color="#fff" fontW="100" fontS="45">
                    {" "}
                    - {storie.name}
                  </TEXT>
                )
            )}
        </CARDINFO>
      </CARDHERO>
    </COL>
  );
}

Hero.propTypes = {
  location: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};
