import request from '..';

export const UploadImage = async (image: any, name: any) => {
  return await request
    .post('file/image-upload', {image, filename: name})
    .then(d => {
      return d;
    })
    .catch(e => {
      return e;
    });
};

export const UploadProfileImage = async (image: any, name: any) => {
  return await request
    .post('profile/update-image', {image, filename: name})
    .then(d => {
      return d;
    })
    .catch(e => {
      return e;
    });
};
