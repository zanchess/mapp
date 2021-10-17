import React from "react";
import { CONFIG } from "../../constants";
import { GenreFilter } from "./GenreFilter/GenreFilter";
import { CommonFilter } from "./CommonFilter/CommonFilter";


export const Filters = (): JSX.Element => {
  return (
    <>
      <div className="filters__genre">
        {CONFIG.FILTERS.GENRES.map(((genre, i) => {
          return <GenreFilter genre={genre} key={i} />
        }))}
      </div>
      <div className="filters__common">
        {CONFIG.FILTERS.COMMON_FILTERS.map(((filter, i) => {
          return <CommonFilter filter={filter} key={i} />
        }))}
      </div>
    </>
  );
}
