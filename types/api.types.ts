import { IMovieType } from './movies.types';

export type IPopularMoviesResponse = {
    page: number,
    results: IMovieType[]
}