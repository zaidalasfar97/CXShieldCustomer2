import {api} from '..';

export const ConversationsApi = api.injectEndpoints({
  endpoints: build => ({
    listConversations: build.query<any, void>({
      providesTags: ['Conversations'],
      query: () => '/chat/conversations/',
    }),
    listConversationMessages: build.query<any, number | void>({
      providesTags: ['ConversationMessages'],
      query: conversationId => `/chat/messages/${conversationId}`,
    }),
    updateConversationMessage: build.mutation<any, {payload: Partial<any>}>({
      invalidatesTags: ['ConversationMessages'],
      query: payload => ({
        body: payload,
        method: 'POST',
        url: '/chat/insert-message/',
      }),
    }),
  }),

  overrideExisting: true,
});

export const {
  useListConversationsQuery,
  useListConversationMessagesQuery,
  useUpdateConversationMessageMutation,
} = ConversationsApi;
