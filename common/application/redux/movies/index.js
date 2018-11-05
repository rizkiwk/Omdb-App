import { combineReducers } from 'redux';
import * as Types from './Types';

//=============== Movie List Redux ===============//
function movieListRedux(state = {}, action) {
    switch (action.type) {
        case Types.API_ERROR_MOVIE_LIST:
            return Object.assign({}, state, { loading: false, error: null, message: action.message });
        case Types.API_SUCCESS_MOVIE_LIST:
            return Object.assign({}, state, { loading: false, payload: action.data, message: action.message });
        case Types.API_REQUEST_MOVIE_LIST:
            return Object.assign({}, state, { loading: true, error: null, payload: null, message: null });
        default:
            return state;
    }
}

//=============== Movies By Channel ===============//
function moviesByChannel(state = {}, action) {
    switch (action.type) {
        case Types.API_SUCCESS_MOVIE_LIST:
            return Object.assign({}, state, {
                [action.channel]: movieListRedux(state[action.channel], action)
            });
        default:
            return state;
    }
}

//=============== Movie By Id ===============//
function movieById(state = {}, action) {

    switch (action.type) {
        case Types.API_ERROR_MOVIE_DETAIL:
            return Object.assign({}, state, { loading: false, error: null, message: action.message });
        case Types.API_SUCCESS_MOVIE_DETAIL:
            return Object.assign({}, state, { loading: false, payload: action.data, message: action.message });
        case Types.API_REQUEST_MOVIE_DETAIL:
            return Object.assign({}, state, { loading: true, error: null, payload: null, message: null });
        default:
            return state;
    }
}

//=============== Movie Search Query ===============//
function movieSearch(state = {}, action) {
    switch (action.type) {
        case Types.LOCAL_MOVIE_SEARCH_QUERY:
            return Object.assign({}, state, { query: action.query });
        default:
            return state;
    }
}

const Movies = combineReducers({
    moviesByChannel,
    movieById,
    movieSearch,
});

export default Movies;