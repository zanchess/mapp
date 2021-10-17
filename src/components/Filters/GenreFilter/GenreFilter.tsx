import React from "react";
interface GenreFilters {
  genre: string;
}

export const GenreFilter = ({genre}: GenreFilters): JSX.Element => {
  return (
    <>
      <a href="#">{genre}</a>
    </>
  );
}
