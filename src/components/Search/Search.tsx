import React from "react";
import { SearchButton } from "./SearchButton/SearchButton";
import { SearchField } from "./SearchField/SearchField";
import "./search.scss";

export const Search = (): JSX.Element => {
  return (
    <>
      <SearchField />
      <SearchButton/>
    </>
  );
}
