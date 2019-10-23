import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter, Switch, Route, BrowserRouter } from "react-router-dom";

import { LoginScene, HotelCollectionScene } from "./scenes";
import { routerSwitchRoutes, SessionProvider } from "./core";
import { HotelEditScene } from "scenes/hotel-edit.scene";

ReactDOM.render(
  // <BrowserRouter> Para no mostrar # en la barra de navegador.
  <SessionProvider>
    <HashRouter>
      <Switch>
        <Route
          exact={true}
          path={routerSwitchRoutes.login}
          component={LoginScene}
        />
        <Route
          path={routerSwitchRoutes.hotelCollection}
          component={HotelCollectionScene}
        />
        <Route
          path={routerSwitchRoutes.hotelEdit}
          component={HotelEditScene}
        />
      </Switch>
    </HashRouter>
  </SessionProvider>,

  // </BrowserRouter>
  document.getElementById("root")
);
