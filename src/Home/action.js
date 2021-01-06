import axios from 'axios';
import {ACTION} from '../types';
import {BASE_URL1, HTTP_TIMEOUT, URLS} from '../Constants';
import {Actions} from 'react-native-router-flux';

// Bullshit to do in evey file ->
const httpClient = axios.create();

httpClient.defaults.timeout = HTTP_TIMEOUT;
httpClient.defaults.baseURL = BASE_URL1;

export const PokemonAction = () => {
  return dispatch => {
    console.log(BASE_URL1);
    httpClient
      .get()
      .then(response => {
        console.log(response.data.results);
        dispatch({type: ACTION.DETAILS, payload: response.data.results});
      })
      .catch(e => {
        Alert.alert('Got error: ', e.toString());
      });
  };
};

export const PokemonInfo = id => {
  return dispatch => {
    console.log(BASE_URL1);
    httpClient
      .get(id)
      .then(response => {
        console.log(response.data);
        dispatch({type: ACTION.INFO, payload: response.data});
      })
      .catch(e => {
        console.log('Got error: ', e.toString());
      });
  };
};
