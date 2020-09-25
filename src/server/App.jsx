import React from "react";
import { StaticRouter } from "react-router-dom";
import RouterApp from "../routes/RouterApp";
import { Provider } from 'react-redux';
import store from '../store';

export default ({ location, context, store }) => {
  return (
    <Provider store={store}>
      <StaticRouter location={location} context={context}>
        <RouterApp />
      </StaticRouter>
    </Provider>
  );
};
