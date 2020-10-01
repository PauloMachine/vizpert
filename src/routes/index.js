import React from "react";
import { Switch } from "react-router-dom";

// Pages
import Questions from "../pages/questions";
import NotFound from "../pages/notFound";
import Heroes from "../pages/heroes";
import Hero from "../pages/hero";

// Configuração das rotas
import Route from "./Route";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={Questions} exact />
      <Route path="/heroes" component={Heroes} isPrivate />
      <Route path="/hero" component={Hero} isPrivate />
      <Route path="*" component={NotFound} isPrivate />
    </Switch>
  );
}
