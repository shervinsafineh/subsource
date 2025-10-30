export interface Title {
  movieId: number;
  title: string;
  alternativeTitle: string;
  type: string;
  releaseYear: number;
  imdbId: string;
  tmdbId: string;
  season: number | null;
  subtitleCount: number;
  posters: Posters;
}

interface Posters {
  small: string;
  medium: string;
  large: string;
  original: string;
}
