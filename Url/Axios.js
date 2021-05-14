import axios from 'axios';
import {DevURL} from '../Url/Url';
import AsyncStorage from '@react-native-async-storage/async-storage';

const axiosdata = {
  post: (url, data) => {
    return axios.post(DevURL + url, data);
  },
  postwithparams: (url, data, params) => {
    return axios({
      data,
      params,
      method: 'post',
      url: DevURL + url,
    });
  },

  get: url => {
    return axios.get(DevURL + url);
  },

  getWithParamToken: (url, params) => {
    return axios({
      method: 'get',
      headers: {
        Authorization: AsyncStorage.getItem(res.data.token),
      },
      params,
      url: DevURL + url,
    });
  },

  deletewithParamToken: (url, params) => {
    return axios({
      method: 'delete',
      headers: {
        Authorization: AsyncStorage.getItem(res.data.token),
      },
      params,
      url: DevURL + url,
    });
  },
};

export default axiosdata;
