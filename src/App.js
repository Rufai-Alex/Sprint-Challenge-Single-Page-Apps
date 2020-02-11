import React from "react";
import Header from "./components/Header";
import { Route, Switch, Link } from "react-router-dom";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";

export default function App() {
  return (
    <main>
      <Header />
      <WelcomePage />
      <Route path='/characters' component={CharacterList} />
    </main>
  );
}
