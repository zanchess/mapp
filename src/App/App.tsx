import React from "react";
import Logo from "../components/Logo/Logo";
import { AddMovie } from "../components/AddMovie/AddMovie";
import { Search } from "../components/Search/Search";
import './app.scss';
import { Filters } from "../components/Filters/Filters";
import { CountedMovies } from "../components/CountedMovies/CountedMovies";

export const App = (): JSX.Element => {
  return (
    <>
      <header className="header">
        <Logo/>
        <AddMovie/>
      </header>
      <div className="search">
        <Search/>
      </div>
      <div className="movies">
        <div className="filters">
          <Filters />
        </div>
        <CountedMovies movieSum={39} />
      </div>
    </>
  );
};
