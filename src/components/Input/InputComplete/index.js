/* eslint-disable no-unused-expressions, no-return-assign, no-nested-ternary */
import React, { useState, useEffect, useRef, useCallback } from "react";
import { useField } from "@unform/core";
import PropTypes from "prop-types";

import { INPUT, INPUTGROUPTEXT } from "./styles";

export default function InputComplete({
  name,
  icon,
  hidden,
  submit,
  option,
  width,
  ...rest
}) {
  const { fieldName, defaultValue, registerField } = useField(name);

  const [isFocused, setIsFocused] = useState(false);
  const [isField, setIsField] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    if (inputRef.current?.value) {
      setIsField(true);
    } else {
      setIsField(false);
    }
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  function handleInputChange(data) {
    submit(data);
  }

  return (
    <>
      <INPUT
        onChange={(change) => handleInputChange(change)}
        defaultValue={defaultValue}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isFocused={isFocused}
        isField={isField}
        autoComplete="off"
        ref={inputRef}
        {...rest}
      />
      <INPUTGROUPTEXT>{icon}</INPUTGROUPTEXT>
    </>
  );
}

InputComplete.propTypes = {
  name: PropTypes.string.isRequired,
  option: PropTypes.string,
  icon: PropTypes.element,
  hidden: PropTypes.bool,
  submit: PropTypes.func,
};

InputComplete.defaultProps = {
  icon: null,
  hidden: false,
  submit: null,
  option: null,
};
