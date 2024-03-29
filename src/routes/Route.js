/* eslint-disable react/jsx-props-no-spreading, no-nested-ternary */
import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import { store } from "../hooks";

import { QuestionsLayout, HeroesLayout } from "../layouts";
export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const { signed } = store.getState().auth;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/heroes" />;
  }

  const Layout = signed ? HeroesLayout : QuestionsLayout;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
