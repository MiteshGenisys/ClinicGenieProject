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

  getWithParamToken: async (url, params) => {
    const Token = await AsyncStorage.getItem('token');
    return axios({
      method: 'get',
      headers: {
        Authorization: Token,
      },
      params,
      url: DevURL + url,
    });
  },

  putWithToken: async (url, data) => {
    const Token = await AsyncStorage.getItem('token');
    return axios({
      method: 'PATCH',
      headers: {
        Authorization: Token,
      },
      data,
      url: DevURL + url,
    });
  },

  postwithtoken: async url => {
    const Token = await AsyncStorage.getItem('token');
    return axios({
      method: 'post',
      headers: {
        Authorization: Token,
      },
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
