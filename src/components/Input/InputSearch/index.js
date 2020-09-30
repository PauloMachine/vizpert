/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import { useField } from "@unform/core";
import PropTypes from "prop-types";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

export default function InputSearch({
  defaultValue,
  options,
  isMulti,
  submit,
  width,
  name,
}) {
  const { fieldName, registerField } = useField(name);
  const [isDefaultValue, setIsDefaultValue] = useState(false);
  const [value] = useState();
  const inputRef = useRef(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  useEffect(() => {
    if (defaultValue?.value) {
      inputRef.current.value = defaultValue.value;
      setIsDefaultValue(true);
    }
  }, [defaultValue, isDefaultValue]);

  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "transparent",
      borderColor: "transparent",
      borderRadius: 50,
      width: width,
      height: 56,
      fontSize: 16,
      color: "#fff",
      zIndex: 1,
      boxShadow: "none",
      "&:hover": {
        border: "1px solid transparent",
      },
    }),
    singleValue: (styles) => ({
      ...styles,
      color: "#ccc !important",
    }),
  };

  function handleSubmit(values) {
    if (values?.length > 0) {
      inputRef.current.value = values.map((obj) => obj.value).join(",");
      submit(values.value);
    } else {
      // Verifica se é somente escolha de uma unica opção
      if (
        !isMulti &&
        values !== "" &&
        values !== null &&
        values !== undefined
      ) {
        inputRef.current.value = values.value;
        submit(values.value);
      } else {
        inputRef.current.value = null;
        submit(values.value);
      }
    }
  }

  return (
    <Select
      defaultValue={isMulti ? null : defaultValue}
      onChange={(values) => handleSubmit(values)}
      onClick={(values) => handleSubmit(values)}
      components={animatedComponents}
      placeholder="Order content"
      styles={colourStyles}
      isMulti={!!isMulti}
      closeMenuOnSelect
      options={options}
      ref={inputRef}
      value={value}
    />
  );
}

InputSearch.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  isMulti: PropTypes.element.isRequired,
  defaultValue: PropTypes.element,
  width: PropTypes.number,
  submit: PropTypes.func,
};

InputSearch.defaultProps = {
  defaultValue: {},
  submit: null,
  width: 220,
};
