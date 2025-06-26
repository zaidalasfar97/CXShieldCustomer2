/* eslint-disable prettier/prettier */
/* eslint-disable dot-notation */
import Axios, {AxiosStatic} from 'axios';
import {t} from 'i18next';
import DeviceInfo from 'react-native-device-info';
import VersionNumber from 'react-native-version-number';
import appConfig from '../../config/appConfig';
//API Zaid Alasfar
import {getData} from '../../config/storage';
const URL = '';
Axios.create({
  baseURL: URL,
  timeout: 10000,
});
Axios.defaults.baseURL = URL;
Axios.interceptors.request.use(
  async config => {
    if (config && config.headers) {
      config.headers.Authorization = `Bearer ${await getData('access_token')}`;
      config.headers['App-Language'] = t('app-language') ?? 'en';
    }

    //config.headers?.Authorization = `Bearer ${'2|wemdPO2T8m0lb9Zc4DshVq9LjUIc38okYZJjmuRa'}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);
// const onSuccess = function (response: any) {
//   return response;
// };
// const onError = async function (error: any) {
//   return Promise.reject(error);
// };
// Axios.interceptors.response.use(onSuccess, onError);
Axios.defaults.headers.post['App-Language'] = t('app-language') ?? 'sa';
Axios.defaults.headers.post['App-Version'] = VersionNumber.appVersion;
Axios.defaults.headers.post['Os-Version'] = DeviceInfo.getSystemName();
Axios.defaults.headers.post['Device-Type'] = DeviceInfo.getDeviceType();
Axios.defaults.headers.post['Device-OS'] = DeviceInfo.getSystemName();
Axios.defaults.headers.post['Device-Id'] = DeviceInfo.getDeviceId();
Axios.defaults.headers.post['Location'] = 'Amman';
Axios.defaults.headers.post['Accept'] = 'Application/json';

const request = Axios as AxiosStatic;
export default request;
