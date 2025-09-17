// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = import.meta.env.VITE_KINOPOIKS_API_KEY;

// Define a service using a base URL and expected endpoints
export const kinopoiskApi = createApi({
  reducerPath: 'kinopoiskApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://kinopoiskapiunofficial.tech/api',
    prepareHeaders: headers => {
      headers.set('X-API-KEY', '976db92e-8892-44a4-8801-d11ec5406421');
      headers.set('Content-Type', 'application/json');
    },
  }),
  endpoints: builder => ({
    getMovieTop: builder.query({
      query: ({ type, page }) =>
        `/v2.2/films/collections?type=${type}&page=${page}`,
    }),
    getMovie: builder.query({
      query: ({
        countries,
        genreId,
        order = 'NUM_VOTE',
        type = 'FILM',
        year,
        page,
      }) =>
        `/v2.2/films?countries=${countries}&genres=${genreId}&order=${order}&type=${type}&year=${year}&page=${page}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMovieTopQuery, useGetMovieQuery } = kinopoiskApi;
