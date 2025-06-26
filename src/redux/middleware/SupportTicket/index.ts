import request from '..';

export const CreateTicket = async (ticket: any) => {
  return await request
    .post('support-ticket/create', ticket)
    .then(d => {
      return d;
    })
    .catch(e => {
      return e;
    });
};
