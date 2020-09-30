import React, { useRef } from "react";
import PropTypes from "prop-types";
import * as Yup from "yup";

import { Form } from "@unform/web";

export default function PrecisaForm({
  initialData,
  children,
  schema,
  submit,
  change,
  ...rest
}) {
  const formRef = useRef(null);

  async function handleFormSubmit(data) {
    try {
      formRef.current.setErrors({});

      if (schema) {
        await schema.validate(data, {
          abortEarly: false,
        });
      }

      submit(data);
    } catch (err) {
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  }

  async function handleFormChange(data) {
    change(data);
  }

  return (
    <Form
      initialData={initialData}
      ref={formRef}
      onSubmit={handleFormSubmit}
      onChange={change && handleFormChange}
      {...rest}
    >
      {children}
    </Form>
  );
}

PrecisaForm.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  schema: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  initialData: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  submit: PropTypes.func.isRequired,
  change: PropTypes.func,
};

PrecisaForm.defaultProps = {
  initialData: {},
  children: {},
  change: null,
  schema: {},
};
