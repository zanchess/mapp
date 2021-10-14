import React from "react";
import Logo from "../components/Logo/Logo";
import { AddMovie } from "../components/AddMovie/AddMovie";
import './app.scss';

export const App = (): JSX.Element => {
  return (
    <>
      <header className="header">
        <Logo/>
        <AddMovie/>
      </header>
    </>
  );
};
