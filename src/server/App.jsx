import React from "react";
import { StaticRouter } from "react-router-dom";
import RouterApp from "../routes/RouterApp";

export default ({ location, context }) => {
  return (
    <StaticRouter location={location} context={context}>
      <RouterApp />
    </StaticRouter>
  );
};
