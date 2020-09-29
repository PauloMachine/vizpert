/* eslint-disable react/jsx-props-no-spreading, no-nested-ternary */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { QuestionsLayout, HeroesLayout} from '../layouts';

export default function RouteWrapper({ component: Component, isPrivate, ...rest }) {
   const { signed } = useSelector(state => state.auth);

   if (signed && !isPrivate) {
      return <Redirect to="/heroes" />;
   }
   
   if (!signed && isPrivate) {
      return <Redirect to="/" />;
   }

   const Layout = signed ? HeroesLayout : QuestionsLayout;

   return (
      <Route
         {...rest}
         render={props => (
            <Layout>
               <Component {...props} />
            </Layout>
         )}
      />
   );
}

RouteWrapper.propTypes = {
   isPrivate: PropTypes.bool,
   component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

RouteWrapper.defaultProps = {
   isPrivate: false,
};
