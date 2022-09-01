import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {config} from "../config";
import { IPopularMoviesResponse } from "../types/api.types";

export const popularMoviesApi = createApi({
  reducerPath: "movies",

  baseQuery: fetchBaseQuery({
    baseUrl: `${config.POPULAR_MOVIES_API_URL}?api_key=${config.API_KEY}`,
  }),

  endpoints: (builder) => ({
    getPopularMovies: builder.query<IPopularMoviesResponse,void>({
      query: () => ({
        url: '',
        method: 'GET'
      }),
    }),
  }),
});

export const { useGetPopularMoviesQuery } = popularMoviesApi;
