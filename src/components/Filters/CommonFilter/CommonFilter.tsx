import React from "react";
interface CommonFilters {
  filter: string;
}

export const CommonFilter = ({filter}: CommonFilters): JSX.Element => {
  return (
    <>
      <a href="#">{filter}</a>
    </>
  );
}
