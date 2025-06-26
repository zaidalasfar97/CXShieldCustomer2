import {api} from '..';

export const NotificationsApi = api.injectEndpoints({
  endpoints: build => ({
    notifications: build.query<any, void>({
      providesTags: ['Notifications'],
      query: () => '/userNotifications/',
    }),
  }),
  overrideExisting: false,
});

export const {useNotificationsQuery} = NotificationsApi;
