import {api} from '..';

export const SettingsApi = api.injectEndpoints({
  endpoints: build => ({
    pages: build.query<any, void>({
      providesTags: ['Pages'],
      query: () => '/pages/',
    }),
    Tickets: build.query<any, void>({
      providesTags: ['Tickets'],
      query: () => '/support-ticket/',
    }),
    TicketDetails: build.query<any, void>({
      providesTags: ['TicketReplies'],
      query: ticket_id => '/ticket_reply/' + ticket_id,
    }),
    userInfo: build.query<any, void>({
      providesTags: ['UserInfo'],
      query: (params: any) => '/user/userInfo/' + params?.id,
    }),
  }),
  overrideExisting: false,
});

export const {
  usePagesQuery,
  useUserInfoQuery,
  useTicketsQuery,
  useTicketDetailsQuery,
} = SettingsApi;
