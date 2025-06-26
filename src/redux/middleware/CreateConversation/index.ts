import request from '..';
export const CreateConversation = async (product: any) => {
  return await request
    .post('chat/create-conversation', product)
    .then(d => {
      return d;
    })
    .catch(e => {
      return e;
    });
};
