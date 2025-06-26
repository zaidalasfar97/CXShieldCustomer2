import {api} from '..';

export const LocationApi = api.injectEndpoints({
  endpoints: build => ({
    listCities: build.query<any, void>({
      providesTags: ['Cities'],
      query: () => '/cities/',
    }),
    listCountries: build.query<any, number | void>({
      providesTags: ['Cities'],
      query: () => '/countries/',
    }),
  }),
  overrideExisting: false,
});

export const {useListCitiesQuery, useListCountriesQuery} = LocationApi;
