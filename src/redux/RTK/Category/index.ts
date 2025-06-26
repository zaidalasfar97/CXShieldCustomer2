import {api} from '..';

export const CategoryApi = api.injectEndpoints({
  endpoints: build => ({
    listCategories: build.query<any, void>({
      providesTags: ['MainCategories'],
      query: () => '/categories/',
    }),
    listFeaturedCategories: build.query<any, void>({
      providesTags: ['Categories'],
      query: () => '/categories/featured',
    }),
    listSubCategories: build.query<any, number | void>({
      providesTags: ['SubCategories'],
      query: categoryId => `/sub-categories/${categoryId}`,
    }),
  }),
  overrideExisting: true,
});

export const {
  useListCategoriesQuery,
  useListSubCategoriesQuery,
  useListFeaturedCategoriesQuery,
} = CategoryApi;
