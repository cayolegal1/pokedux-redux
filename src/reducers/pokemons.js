import { SET_POKEMONS } from "../actions/types";

const initialState = {

    pokemons: []
};

export const pokemonsReducer = (state = initialState, action) => {

    if(action.type === SET_POKEMONS) return {...state, pokemons: action.payload};

    return state;
};