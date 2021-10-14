import React from "react";
import './search-field.scss'

export const SearchField = (): JSX.Element => {
  return (
    <form className="search__form">
      <input className='search__field' type="text"/>
    </form>
  );
};
