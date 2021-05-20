import {date} from 'yup/lib/locale';
import api from '../Url/Axios';

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

export const auth_patient = () => {
  return new Promise(async (resolve, reject) => {
    return api
      .post(
        `/patients?fromDate=2018-01-01&toDate=2022-05-05&search=b&page=1&limit=5`,
      )
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};
