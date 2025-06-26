import appConfig from '../../config/appConfig';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {getData} from '../../config/storage';
import {t} from 'i18next';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: appConfig.apiUrl,
    prepareHeaders: async headers => {
      console.log(await getData('access_token'));
      headers.set('Authorization', `Bearer ${await getData('access_token')}`);
      headers.set('App-Language', t('app-language'));
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: () => ({}),
  reducerPath: 'api',
  tagTypes: [
    'Categories',
    'SubCategories',
    'Products',
    'Cities',
    'FeaturedProducts',
    'LatestProducts',
    'MainCategories',
    'CategoryProducts',
    'ProductDetails',
    'CategoryAttributes',
    'Conversations',
    'ConversationMessages',
    'MyAds',
    'MyBids',
    'Pages',
    'WishList',
    'UserInfo',
    'SearchProducts',
    'Tickets',
    'TicketReplies',
    'Notifications',
    'MyWins',
  ],
});
