import {createAsyncThunk} from '@reduxjs/toolkit';
import request from '..';
export const fetchUserSetting = createAsyncThunk(
  'user/fetchUserSetting',
  async (authKey: string) => {
    return await request
      .post('get-user-by-access_token', {
        access_token: authKey,
      })
      .then(d => {
        return d.data;
      })
      .catch(e => {
        throw e;
      });
  },
);
export const signUp = async (userInfo: any) => {
  return await request
    .post('auth/signup', userInfo)
    .then(d => {
      return d;
    })
    .catch(e => {
      return e;
    });
};

export const confirmCode = async (userInfo: any) => {
  return await request
    .post('auth/confirm_code', userInfo)
    .then(d => {
      return d;
    })
    .catch(e => {
      return e;
    });
};
export const signIn = async (userInfo: any) => {
  return await request
    .post('auth/login', userInfo)
    .then(d => {
      return d;
    })
    .catch(e => {
      throw e;
    });
};
export const updateProfile = async (userInfo: any) => {
  return await request
    .post('profile/update', userInfo)
    .then(d => {
      return d;
    })
    .catch(e => {
      return e;
    });
};
export const updateCRCDocument = async (userInfo: any) => {
  return await request
    .post('profile/updateCRCDocument', userInfo)
    .then(d => {
      return d;
    })
    .catch(e => {
      return e;
    });
};

export const forgetRequest = async (userInfo: any) => {
  return await request
    .post('auth/password/forget_request', userInfo)
    .then(d => {
      return d;
    })
    .catch(e => {
      throw e;
    });
};

export const isValidCode = async (userInfo: any) => {
  return await request
    .post('auth/password/isValidCode', userInfo)
    .then(d => {
      return d;
    })
    .catch(e => {
      throw e;
    });
};
export const ConfirmReset = async (userInfo: any) => {
  return await request
    .post('auth/password/confirm_reset', userInfo)
    .then(d => {
      return d;
    })
    .catch(e => {
      throw e;
    });
};

export const ChangeProfilePassword = async (userInfo: any) => {
  return await request
    .post('auth/password/change_password', userInfo)
    .then(d => {
      return d;
    })
    .catch(e => {
      throw e;
    });
};
export const PaymentCheckOut = async (paymentInfo: any) => {
  return await request
    .post('payments/pay/hyperPayCheckoutId', paymentInfo)
    .then(d => {
      return d;
    })
    .catch(e => {
      throw e;
    });
};
export const updatePlayerId = async () => {
  return false;
};
