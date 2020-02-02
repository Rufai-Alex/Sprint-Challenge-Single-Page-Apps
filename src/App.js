import React from "react";
import Header from "./components/Header.js";
import { Route, Switch, Link } from "react-router-dom";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage.js";
import SearchForm from "./components/SearchForm";

export default function App() {
  return (
    <main>
      <Header />
      <SearchForm />
      <Switch>
        <Route exart path='/'>
          <WelcomePage />
        </Route>
        <Route exact path='/component'>
          <CharacterList />
        </Route>
      </Switch>
    </main>
  );
}
