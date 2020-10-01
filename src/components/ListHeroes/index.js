/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import maskDate from "../../utils/functions/maskDate";
import {
  BUTTON,
  CARD,
  CARDHERO,
  CARDINFO,
  COL,
  IMG,
  ROW,
  TEXT,
} from "./styles";

export default function ListHeroes({ profile, heroes, limit }) {
  return (
    <>
      <COL sm="10" md="10" xl="10" lg="10">
        <CARD>
          <ROW>
            {heroes?.length > 0 &&
              heroes?.map(
                (hero, index) =>
                  index + 1 <= limit && (
                    <COL key={`${hero.id}`} sm="12" md="12" lg="6" xl="4">
                      <CARDHERO>
                        <IMG
                          alt={`${hero.name}`}
                          src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                        />
                        <CARDINFO>
                          <TEXT color="#fff" fontW="900" fontS="20px">
                            {hero.name}
                          </TEXT>
                          {profile?.typeLike === "series" && (
                            <TEXT color="#fff" fontW="600" fontS="14">
                              Series: {hero.series.available}
                            </TEXT>
                          )}
                          {profile?.typeLike === "stories" && (
                            <TEXT color="#fff" fontW="600" fontS="14">
                              Stories: {hero.stories.available}
                            </TEXT>
                          )}
                          <TEXT color="#fff" fontW="100" fontS="12px">
                            Modified:{" "}
                            {hero.modified
                              ? maskDate(new Date(hero.modified))
                              : "Not found"}
                          </TEXT>
                          <Link
                            to={{
                              pathname: "/hero",
                              state: {
                                hero: heroes[index],
                                typeLike: profile?.typeLike,
                              },
                            }}
                          >
                            <BUTTON className="mt-2">Details</BUTTON>
                          </Link>
                        </CARDINFO>
                      </CARDHERO>
                    </COL>
                  )
              )}
          </ROW>
        </CARD>
      </COL>
      <>
        {heroes?.length === 0 && (
          <CARDHERO>
            <TEXT pointer color="#fff" fontW="400" fontS="30px">
              No hero with this information!
            </TEXT>
          </CARDHERO>
        )}
      </>
    </>
  );
}

ListHeroes.propTypes = {
  profile: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  heroes: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  limit: PropTypes.number.isRequired,
};
