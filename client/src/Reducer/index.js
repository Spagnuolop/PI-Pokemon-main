import {
  BY_CREATED,
  CREATE_POKEMON,
  ERROR_MESSAGE,
  FILTER_BY_TYPE,
  GET_ALL_POKEMONS,
  GET_DETAILS,
  GET_POKEMON_ID,
  GET_TYPES,
  ORDER_BY_ATTACK_ASC,
  ORDER_BY_ATTACK_DESC,
  ORDER_BY_NAME_ASC,
  ORDER_BY_NAME_DESC,
  SEARCH_POKEMON,
} from "../Actions";

const initialstate = {
  pokemonsList: [],
  pokemonTypes: [],
  pokemon: {},
};

const rootReducer = (state = initialstate, action) => {
  switch (action.type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        pokemonsList: action.payload,
      };
    case GET_POKEMON_ID:
      return {
        ...state,
        pokemon: action.payload,
      };
    case GET_TYPES:
      return {
        ...state,
        pokemonTypes: action.payload,
      };
    case SEARCH_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
      };
    case GET_DETAILS:
      return {
        ...state,
        pokemon: action.payload,
      };
    case BY_CREATED:
      return {
        ...state,
        pokemonsList: action.payload,
      };
    case CREATE_POKEMON:
      return {
        ...state,
        pokemonsList: state.pokemonsList.concat(action.payload),
      };
    case FILTER_BY_TYPE:
      return {
        ...state,
        pokemonsList: action.payload.pokemons,
      };
    case ORDER_BY_ATTACK_ASC:
      return {
        ...state,
        pokemonsList: action.payload,
      };
    case ORDER_BY_ATTACK_DESC:
      return {
        ...state,
        pokemonsList: action.payload,
      };
    case ORDER_BY_NAME_ASC:
      return {
        ...state,
        pokemonsList: action.payload,
      };
    case ORDER_BY_NAME_DESC:
      return {
        ...state,
        pokemonsList: action.payload,
      };
    case ERROR_MESSAGE:
      alert(action.payload);
      return {
        ...state,
        pokemon: {},
      };
    default:
      return state;
  }
};

export default rootReducer;
