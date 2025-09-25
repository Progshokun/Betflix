// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = import.meta.env.VITE_KINOPOIKS_API_KEY;

const exludeGenres = [
  '',
  'новости',
  'для взрослых',
  'церемония',
  'реальное ТВ',
  'ток-шоу',
];

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
        keyword = '',
      }) =>
        `/v2.2/films?countries=${countries}&genres=${genreId}&order=${order}&type=${type}&yearFrom=${year}&yearTo=${year}&page=${page}&keyword=${keyword}`,
    }),
    getGenreAndCountry: builder.query({
      query: () => `/v2.2/films/filters`,
      transformResponse: response => ({
        ...response,
        genres: response.genres.filter(
          ({ genre }) => !exludeGenres.includes(genre),
        ),
      }),
    }),
    getMovieId: builder.query({
      query: id => `/v2.2/films/${id}`,
    }),
    getSequelsandPrequels: builder.query({
      query: id => `/v2.1/films/${id}/sequels_and_prequels`,
    }),
    getStaff: builder.query({
      query: id => `/v1/staff?filmId=${id}`,
    }),
    getStaffId: builder.query({
      query: id => `/v1/staff/${id}`,
    }),
  }),
});

export const {
  useGetMovieTopQuery,
  useGetMovieQuery,
  useGetGenreAndCountryQuery,
  useGetMovieIdQuery,
  useGetSequelsandPrequelsQuery,
  useGetStaffQuery,
  useGetStaffIdQuery,
} = kinopoiskApi;
