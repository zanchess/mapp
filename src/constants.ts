interface Config {
  FILTERS:{
    GENRES: Array<string>,
    COMMON_FILTERS: Array<string>,
  },
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
    COMMON_FILTERS:[
      "RELEASE DATE",
      "RATING",
    ]
  },
};
