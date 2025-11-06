export interface RespuestaMDB {
  page: number;
  total_results: number;
  total_pages: number;
  results: Pelicula[];
}

export interface Pelicula {
  vote_count: number;
  id: number;
  video: boolean;
  vote_average: number;
  title: string;
  popularity: number;
  poster_path: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  backdrop_path?: string;
  adult: boolean;
  overview: string;
  release_date: string;
}

export interface PeliculaDetalle {
    adult?:                 boolean;
    backdrop_path?:         string;
    belongs_to_collection?: null;
    budget?:                number;
    genres?:                Genre[];
    homepage?:              string;
    id?:                    number;
    imdb_id?:               string;
    origin_country?:        string[];
    original_language?:     string;
    original_title?:        string;
    overview?:              string;
    popularity?:            number;
    poster_path?:           string;
    production_companies?:  ProductionCompany[];
    production_countries?:  ProductionCountry[];
    release_date?:          Date;
    revenue?:               number;
    runtime?:               number;
    spoken_languages?:      SpokenLanguage[];
    status?:                string;
    tagline?:               string;
    title?:                 string;
    video?:                 boolean;
    vote_average?:          number;
    vote_count?:            number;
}

export interface Genre {
    id:   number;
    name: string;
}

export interface ProductionCompany {
    id:             number;
    logo_path:      null | string;
    name:           string;
    origin_country: string;
}

export interface ProductionCountry {
    iso_3166_1: string;
    name:       string;
}

export interface SpokenLanguage {
    english_name: string;
    iso_639_1:    string;
    name:         string;
}


// PONER EN DUDA ESTOS, PORQUE NO ESTOY SEGURO SI ESTAN COMPLETAMENTE CORRECTOS

export interface RespuestaCredits {
    id:   number;
    cast: Cast[];
    crew: Cast[];
}

export interface Cast {
    adult:                boolean;
    gender:               number;
    id:                   number;
    known_for_department: Department;
    name:                 string;
    original_name:        string;
    popularity:           number;
    profile_path:         null | string;
    cast_id?:             number;
    character?:           string;
    credit_id:            string;
    order?:               number;
    department?:          Department;
    job?:                 string;
}

export enum Department {
    Acting = "Acting",
    Art = "Art",
    Camera = "Camera",
    CostumeMakeUp = "Costume & Make-Up",
    Directing = "Directing",
    Editing = "Editing",
    Sound = "Sound",
    VisualEffects = "Visual Effects",
    Writing = "Writing",
}

export interface RespuestaGeneros {
  genres: Genre[];
}
