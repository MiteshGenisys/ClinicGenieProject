import {date} from 'yup/lib/locale';
import api from '../Url/Axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const auth_login = body => {
  return new Promise(async (resolve, reject) => {
    return api
      .post(`/doctor/login`, body)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const auth_register = body => {
  return new Promise(async (resolve, reject) => {
    return api
      .post(`/inquiry`, body)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const auth_forgot = email => {
  return new Promise(async (resolve, reject) => {
    return api
      .post(`/forgate-password?email= ${email} `)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const get_patientdetails = () => {
  return new Promise(async (resolve, reject) => {
    return api
      .getWithParamToken(
        `/patients?fromDate=01-01-2015&toDate=05-05-2022&search=&page=1&limit=10`,
      )
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const add_patient = body => {
  return new Promise(async (resolve, reject) => {
    return api
      .postwithtoken(`/patient/create`, body)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};
