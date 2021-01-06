import {COLORS_LIGHT, COLORS_DARK} from '../Constants';
import {AsyncStorage} from 'react-native';
import {ACTION} from '../types';
// import console = require('console')
// import console = require('console');

const INITIAL_STATE = {
  COLORS: COLORS_LIGHT,
  loading: true,
  pokemon: [],
  pokemonInfo: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION.DETAILS:
      return {
        ...state,
        pokemon: action.payload,
      };
    case ACTION.INFO:
      return {
        ...state,
        pokemonInfo: action.payload,
      };
    default:
      return state;
  }
};
