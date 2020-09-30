/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import MdSearch from "@meronex/icons/md/MdSearch";
import schema from "../../validations/form/noValidation";

import { COL, FORM, ROW, TEXT } from "./styles";
import { LISTHEROES, INPUTSEARCH, INPUTCOMPLETE } from "../../components";

export default function Heroes() {
  const { heroes } = useSelector((state) => state.auth);
  const { profile } = useSelector((state) => state.user);
  const [typeOrder, setTypeOrder] = useState("orderName");
  const [orderHeroes, setOrderHeroes] = useState(heroes);
  const [listHeroes, setListHeroes] = useState();
  const [change, setChange] = useState(false);
  const [limit, setLimit] = useState(10);

  async function createHeroes() {
    await setListHeroes(orderHeroes || heroes);
  }

  useEffect(() => {
    createHeroes();
  }, [change, limit]);

  // Cria as opções de ordenação
  function createOptionOrder() {
    const options = [
      {
        value: "orderName",
        label: "Sort by name",
      },
      {
        value: "orderDate",
        label: "Sort by date",
      },
    ];

    profile?.typeLike === "series" &&
      options.push({ value: "orderSeries", label: "Sort by series" });
    profile?.typeLike === "stories" &&
      options.push({ value: "orderStories", label: "Sort by stories" });

    return options;
  }

  // Cria as opções de limite
  function createOptionLimit() {
    const options = [
      {
        value: 5,
        label: "Limit 5",
      },
      {
        value: 10,
        label: "Limit 10",
      },
      {
        value: 25,
        label: "Limit 25",
      },
    ];
    return options;
  }

  // Ao clicar no dropdown do filtro de ordenação/limite
  // escolhe a opção e seta um novo array ordenado ou novo limite
  async function handleSubmit(data) {
    if (data === "orderName") {
      await setTypeOrder("orderName");
      await setOrderHeroes(
        heroes.sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        })
      );
    } else if (data === "orderDate") {
      await setTypeOrder("orderDate");
      await setOrderHeroes(
        heroes.sort(function (a, b) {
          if (a.modified > b.modified) {
            return 1;
          }
          if (a.modified < b.modified) {
            return -1;
          }
          return 0;
        })
      );
    } else if (data === "orderSeries") {
      await setTypeOrder("orderSeries");
      await setOrderHeroes(
        heroes.sort(function (a, b) {
          if (a.series.available > b.series.available) {
            return 1;
          }
          if (a.series.available < b.series.available) {
            return -1;
          }
          return 0;
        })
      );
    } else if (data === "orderStories") {
      await setTypeOrder("orderStories");
      await setOrderHeroes(
        heroes.sort(function (a, b) {
          if (a.stories.available > b.stories.available) {
            return 1;
          }
          if (a.stories.available < b.stories.available) {
            return -1;
          }
          return 0;
        })
      );
    } else if (data === 5) {
      await setLimit(5);
    } else if (data === 10) {
      await setLimit(10);
    } else if (data === 25) {
      await setLimit(25);
    }

    await setChange(!change);
  }

  async function handleChange(data) {
    if (typeOrder === "orderName") {
      await setOrderHeroes(
        heroes
          .filter((obj) => {
            const upperObj = obj.name.toUpperCase();
            return upperObj.indexOf(data.target.value.toUpperCase()) !== -1;
          })
          .sort(function (a, b) {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
          })
      );
    } else if (typeOrder === "orderDate") {
      await setOrderHeroes(
        heroes
          .filter((obj) => {
            const upperObj = obj.modified.toUpperCase();
            return upperObj.indexOf(data.target.value.toUpperCase()) !== -1;
          })
          .sort(function (a, b) {
            if (a.modified > b.modified) {
              return 1;
            }
            if (a.modified < b.modified) {
              return -1;
            }
            return 0;
          })
      );
    } else if (typeOrder === "orderSeries") {
      await setOrderHeroes(
        heroes
          .filter((obj) => {
            const upperObj = String(obj.series.available).toUpperCase();
            return (
              upperObj.indexOf(String(data.target.value).toUpperCase()) !== -1
            );
          })
          .sort(function (a, b) {
            if (a.series.available > b.series.available) {
              return 1;
            }
            if (a.series.available < b.series.available) {
              return -1;
            }
            return 0;
          })
      );
    } else if (typeOrder === "orderStories") {
      await setOrderHeroes(
        heroes
          .filter((obj) => {
            const upperObj = obj.stories.available.toUpperCase();
            return upperObj.indexOf(data.target.value.toUpperCase()) !== -1;
          })
          .sort(function (a, b) {
            if (a.stories.available > b.stories.available) {
              return 1;
            }
            if (a.stories.available < b.stories.available) {
              return -1;
            }
            return 0;
          })
      );
    }

    await setChange(!change);
  }

  return (
    <>
      <COL sm="12" md="12" xl="12" lg="12">
        <ROW>
          <COL margin>
            <TEXT className="mb--2" color="#fff" fontW="600" fontS="100">
              Hello {profile?.name.split(" ")}
            </TEXT>
            <TEXT className="mt--4" color="#ea0009" fontW="900" fontS="70">
              found your hero?
            </TEXT>
            <FORM submit={handleSubmit} change={handleChange} schema={schema}>
              <INPUTSEARCH
                defaultValue={{ value: 10, label: "Limit 10" }}
                options={createOptionLimit()}
                submit={handleSubmit}
                name="order"
                width={100}
              />
              <INPUTSEARCH
                defaultValue={{ value: "orderName", label: "Sort by name" }}
                options={createOptionOrder()}
                submit={handleSubmit}
                name="order"
                width={130}
              />
              <INPUTCOMPLETE
                icon={<MdSearch size={20} color="#444" />}
                placeholder="Filter heroes"
                onPaste="return false"
                onDrop="return false"
                submit={handleChange}
                maxLength="50"
                name="nome"
                autoFocus
              />
            </FORM>
          </COL>
        </ROW>
      </COL>
      <LISTHEROES profile={profile} heroes={listHeroes} limit={limit} />
    </>
  );
}
