import Axios from 'axios';

export default function setAuthToken(token: string) {
  Axios.defaults.headers.common.Authorization = '';
  delete Axios.defaults.headers.common.Authorization;

  if (token) {
    Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
}
