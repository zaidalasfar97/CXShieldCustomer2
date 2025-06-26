import request from '..';

export const CreateAd = async (product: any) => {
  return await request
    .post('products/CreateAuctionProduct', product)
    .then(d => {
      return d;
    })
    .catch(e => {
      return e;
    });
};
export const EditAd = async (product: any) => {
  return await request
    .post('products/EditAuctionProduct', product)
    .then(d => {
      return d;
    })
    .catch(e => {
      return e;
    });
};
export const MakeAdExpired = async (product: any) => {
  return await request
    .post('products/make_ad_expired', product)
    .then(d => {
      return d;
    })
    .catch(e => {
      return e;
    });
};

export const MakeAdClose = async (product: any) => {
  return await request
    .post('products/make_ad_closed', product)
    .then(d => {
      return d;
    })
    .catch(e => {
      return e;
    });
};

export const CheckCreateValidity = async () => {
  return await request
    .post('products/check_create_validity')
    .then(d => {
      return d;
    })
    .catch(e => {
      return e;
    });
};
