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
      .post(`/doctor/add-degree-speciality`)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};
