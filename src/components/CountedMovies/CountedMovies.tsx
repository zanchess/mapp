import React from "react";
interface SumOfMovies {
  movieSum: number;
}

export const CountedMovies = ({movieSum}: SumOfMovies): JSX.Element => {
  return (
    <>
      <div> {movieSum} movies found</div>
    </>
  )
}
