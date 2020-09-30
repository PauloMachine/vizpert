/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

export default function InputSearch({ options, name, defaultValue, isMulti }) {
   const { fieldName, registerField } = useField(name);
   const [isDefaultValue, setIsDefaultValue] = useState(false);
   const [value] = useState();
   const inputRef = useRef(null);

   useEffect(() => {
      registerField({
         name: fieldName,
         ref: inputRef.current,
         path: 'value',
      });
   }, [fieldName, registerField]);

   useEffect(() => {
      if (defaultValue?.value) {
         inputRef.current.value = defaultValue.value;
         setIsDefaultValue(true);
      }
   }, [defaultValue, isDefaultValue]);

   const colourStyles = {
      control: styles => ({
         ...styles,
         backgroundColor: 'transparent',
         borderColor: 'transparent',
         borderRadius: 50,
         width: 220,
         height: 56,
         fontSize: 16,
         color: '#fff',
         zIndex: 1,
         boxShadow: 'none',
         '&:hover': {
            border: '1px solid transparent',
         },
      }),
   };

   function handleSubmit(values) {
      if (values?.length > 0) {
         inputRef.current.value = values.map(obj => obj.value).join(',');
      } else {
         // Verifica se é somente escolha de uma unica opção
         if (!isMulti && values !== '' && values !== null && values !== undefined) {
            inputRef.current.value = values.value;
         } else {
            inputRef.current.value = null;
         }
      }
   }

   return (
      <Select
         defaultValue={isMulti ? null : defaultValue}
         onChange={values => handleSubmit(values)}
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
};

InputSearch.defaultProps = {
   defaultValue: {},
};
