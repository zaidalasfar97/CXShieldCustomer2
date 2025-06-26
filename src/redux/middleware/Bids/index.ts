import request from '..';

export const MakeBid = async (product: any) => {
  return await request
    .post('products/makeBid', product)
    .then(d => {
      return d;
    })
    .catch(e => {
      return e;
    });
};
