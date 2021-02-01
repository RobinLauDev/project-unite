import React from "react";
import { Route } from "react-router-dom";

//Route
export const routeMapToRoutes = (routeMap) => {
  const routes = routeMap.map((item) => {
    if (item.parent !== "") {
      return;
    }
    if (item.hasNested) {
      return (
        <Route path={item.url} element={item.component}>
          {routeMap.map((item2) => {
            if (item2.parent == item.name) {
              return <Route path={item2.url} element={item2.component} />;
            }
          })}
        </Route>
      );
    }
    return <Route path={item.url} element={item.component} />;
  });
  return routes;
};
