import axios from 'axios';
import {ACTION} from '../types';
import {Alert, AsyncStorage} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {BASE_URL, HTTP_TIMEOUT, URLS} from '../Constants';

const httpClient = axios.create();

httpClient.defaults.timeout = HTTP_TIMEOUT;
httpClient.defaults.baseURL = BASE_URL;

export const checkLogin = () => {
  return dispatch => {
    AsyncStorage.getItem('authtoken').then(response => {
      if (response) {
        dispatch({type: ACTION.SET_TOKEN, payload: response});
        Actions.replace('main');
      } else {
        dispatch({type: ACTION.LOGIN_LOADING, payload: false});
      }
    });
  };
};

const checkData = (type, data) => {
  const re = /\S+@\S+\.\S+/;
  if (!re.test(data.email)) {
    Alert.alert('Invalid email address. Please recheck your email');
    return false;
  }
  if (data.password.length < 6) {
    Alert.alert('password too short');
    return false;
  }
  return true;
};

export const loginAction = (type, data) => {
  return dispatch => {
    const isDataCorrect = checkData(type, data);

    if (!isDataCorrect) {
      return null;
    }

    if (type === 'login') {
      httpClient
        .post(URLS.login, data)
        .then(response => {
          dispatch({type: ACTION.SET_TOKEN, payload: response.data.token});
          AsyncStorage.setItem('authtoken', response.data.token);
          Actions.replace('main');
        })
        .catch(e => {
          Alert.alert('Got error: ', e.toString());
        });
    } else {
      httpClient.post(URLS.register, data).then(response => {
        dispatch({type: ACTION.SET_TOKEN, payload: response.data.token});
        AsyncStorage.setItem('authtoken', response.data.token);
        Actions.replace('main');
      });
    }
  };
};
