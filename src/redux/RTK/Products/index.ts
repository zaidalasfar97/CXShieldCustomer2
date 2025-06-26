import {api} from '..';

export const ProductsApi = api.injectEndpoints({
  endpoints: build => ({
    listBestSellingProducts: build.query<any, void>({
      providesTags: ['Products'],
      query: () => '/products/best-seller/',
    }),
    listFeaturedProducts: build.query<any, void>({
      providesTags: ['FeaturedProducts'],
      query: () => '/products/featured/',
    }),
    listLatestProducts: build.query<any, void>({
      providesTags: ['LatestProducts'],
      query: () => '/products/',
    }),
    listCategoryProducts: build.query<any, number | void>({
      providesTags: ['CategoryProducts'],
      query: categoryId => `/products/category/${categoryId}?page=1`,
    }),
    getProductDetails: build.query<any, number | void>({
      providesTags: ['ProductDetails'],
      query: productId => `/products/${productId}`,
    }),
    listMyProducts: build.query<any, void>({
      providesTags: ['MyAds'],
      query: () => '/myProduct',
    }),
    listMyBids: build.query<any, void>({
      providesTags: ['MyBids'],
      query: () => '/myBids',
    }),
    listMyWins: build.query<any, void>({
      providesTags: ['MyWins'],
      query: () => '/myWins',
    }),
    listWishList: build.query<any, void>({
      providesTags: ['WishList'],
      query: () => '/wishlists/',
    }),
    listSearchProducts: build.query<any, any>({
      providesTags: ['SearchProducts'],
      query: _params => {
        return {url: '/products/search', params: _params};
      },
    }),
    addProductToWishList: build.mutation<any, {payload: Partial<any>}>({
      invalidatesTags: ['WishList'],
      query: payload => ({
        body: payload,
        method: 'POST',
        url: '/wishlists-add-product',
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useListBestSellingProductsQuery,
  useListFeaturedProductsQuery,
  useListLatestProductsQuery,
  useListCategoryProductsQuery,
  useGetProductDetailsQuery,
  useListMyProductsQuery,
  useListMyBidsQuery,
  useListWishListQuery,
  useAddProductToWishListMutation,
  useListSearchProductsQuery,
  useListMyWinsQuery,
} = ProductsApi;
