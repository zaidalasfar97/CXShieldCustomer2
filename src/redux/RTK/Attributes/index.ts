import {api} from '..';

export const AttributesApi = api.injectEndpoints({
  endpoints: build => ({
    listCategoryAttributes: build.query<any, number | void>({
      providesTags: ['CategoryAttributes'],
      query: categoryId => `/getAttributesByCategory/${categoryId}`,
    }),
  }),
  overrideExisting: true,
});

export const {useListCategoryAttributesQuery} = AttributesApi;
