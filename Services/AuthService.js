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
        `/patients?fromDate=&toDate=&search=&page=1&limit=1000`,
      )
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const get_patient = id => {
  return new Promise(async (resolve, reject) => {
    return api
      .getWithParamToken(`/patient/${id}`)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const getConsultation = id => {
  return new Promise(async (resolve, reject) => {
    return api
      .getWithParamToken(`/doctor/consult/${id}`)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const edit_patients = (id, body) => {
  return new Promise(async (resolve, reject) => {
    return api
      .putWithToken(`/patient/${id}`, body)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const add_consultation = (id, body) => {
  return new Promise(async (resolve, reject) => {
    return api
      .postWithToken(`/doctor/consult/create/${id}`, body)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};
