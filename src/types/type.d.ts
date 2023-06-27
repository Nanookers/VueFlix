export interface Movie {
    id: number;
    original_title: string;
    poster_path: string;
    backdrop_path: string;
}

export interface MovieDetail {
	adult: boolean;
	backdrop_path: string;
	budget: number;
	genres: Genre[];
	homepage: string | null;
	id: number;
	images: {
	  backdrops: Image[];
	  logos: Image[];
	  poster: Image[];
	};
	imdb_id: string | null;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_countries: ProductionCountry[];
	recommendations: {
	  page: number;
	  results: MovieListResult[];
	  total_pages: number;
	  total_results: number;
	};
	release_date: string;
	revenue: number;
	runtime: number;
	spoken_languages: SpokenLanguage[];
	status:
	  | 'Rumored'
	  | 'Planned'
	  | 'In Production'
	  | 'Post Production'
	  | 'Released'
	  | 'Canceled';
	tagline: string;
	title: string;
	video: boolean;
	videos: {
	  results: Video[];
	};
	vote_average: number;
	vote_count: number;
  }

  export interface Account{
	id: number;
	username: string;

  }