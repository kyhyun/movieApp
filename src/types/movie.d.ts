export interface IMovie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
  favorite?: boolean;
}

export interface IMovieAPIRes {
  Search: IMovie[];
  TotalResults: number;
  Response: boolean;
  Error: string;
}
