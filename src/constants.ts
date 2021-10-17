interface Config {
  FILTERS:{
    GENRES: Array<string>
  }
}

export const CONFIG: Config = {
  FILTERS: {
    GENRES: [
      "ALL",
      "DOCUMENTARY",
      "COMEDY",
      "HORROR",
      "CRIME"
    ],
  },
};
