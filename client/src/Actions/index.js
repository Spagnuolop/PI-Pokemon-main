import axios from "axios";

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const GET_POKEMON_ID = "GET_POKEMON_ID";
export const GET_TYPES = "GET_TYPES";
export const SEARCH_POKEMON = "SEARCH_POKEMON";
export const CREATE_POKEMON = "CREATE_POKEMON";
export const FILTER_POKEMON = "FILTER_POKEMON";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const FILTER_CREATED = "FILTER_CREATED";
export const ORDER_BY_ATTACK_ASC = "ORDER_BY_ATTACK_ASC";
export const FILTER_BY_TYPE = "FILTER_BY_TYPE";
export const GET_POKEMONS_NAME = "GET_POKEMONS_NAME";
export const ERROR_MESSAGE = "ERROR_MESSAGE";
export const ORDER_BY_ATTACK_DESC = "ORDER_BY_ATTACK_DESC";
export const ORDER_BY_NAME_ASC = "ORDER_BY_NAME_ASC";
export const ORDER_BY_NAME_DESC = "ORDER_BY_NAME_DESC";
export const GET_DETAILS = "GET_DETAILS";
export const BY_CREATED = "BY_CREATED";

export const getAllPokemons = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:3001/pokemons");
    dispatch({
      type: GET_ALL_POKEMONS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR_MESSAGE,
      payload: error,
    });
  }
};

export const getPokemonId = (id) => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:3001/pokemons" + id);
    dispatch({
      type: GET_POKEMON_ID,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR_MESSAGE,
      payload: error,
    });
  }
};

export function getPokemonsName(name) {
  return async function (dispatch) {
    try {
      let json = await axios.get(
        "http://localhost:3001/pokemons/pokemon/" + name
      );
      return dispatch({
        type: GET_POKEMONS_NAME,
        payload: json.data,
      });
    } catch (error) {
      dispatch({
        type: ERROR_MESSAGE,
        payload: error,
      });
    }
  };
}

export const getTypes = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:3001/types");
    dispatch({
      type: GET_TYPES,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR_MESSAGE,
      payload: error,
    });
  }
};

export const byCreated = (payload) => async (dispatch) => {
  try {
    const res = await axios.get(
      "http://localhost:3001/pokemons/pokemon/created/" + payload
    );
    dispatch({
      type: BY_CREATED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR_MESSAGE,
      payload: error,
    });
  }
};

export const searchPokemon = (name) => async (dispatch) => {
  try {
    const res = await axios.get(
      "http://localhost:3001/pokemons/pokemon/" + name
    );
    dispatch({
      type: SEARCH_POKEMON,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR_MESSAGE,
      payload: error,
    });
  }
};

export const resetPokemon = () => async (dispatch) => {
  dispatch({
    type: SEARCH_POKEMON,
    payload: {},
  });
};

export const newPokemon = (pokemon) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:3001/pokemons", pokemon);
    dispatch({
      type: CREATE_POKEMON,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR_MESSAGE,
      payload: error,
    });
  }
};

export const filterPokemon = (types, arr) => async (dispatch) => {
  const type = new RegExp(types);
  const res = arr.filter((p) => p.types.match(type));
  dispatch({
    type: FILTER_POKEMON,
    payload: [...res],
  });
};

export const filterType = (typeId) => async (dispatch) => {
  const res = await axios.get("http://localhost:3001/types/" + typeId);
  dispatch({
    type: FILTER_BY_TYPE,
    payload: res.data,
  });
};

export const byAttackasc = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:3001/pokemons/attackasc");
    dispatch({
      type: ORDER_BY_ATTACK_ASC,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR_MESSAGE,
      payload: error,
    });
  }
};

export const byAttackdesc = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:3001/pokemons/attackdesc");
    dispatch({
      type: ORDER_BY_ATTACK_DESC,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR_MESSAGE,
      payload: error,
    });
  }
};

export const byNameAsc = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:3001/pokemons/nameasc");
    dispatch({
      type: ORDER_BY_NAME_ASC,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR_MESSAGE,
      payload: error,
    });
  }
};

export const byNameDesc = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:3001/pokemons/namedesc");
    dispatch({
      type: ORDER_BY_NAME_DESC,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR_MESSAGE,
      payload: error,
    });
  }
};

export const getDetails = (id) => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:3001/pokemons/" + id);
    dispatch({
      type: GET_DETAILS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR_MESSAGE,
      payload: error,
    });
  }
};
