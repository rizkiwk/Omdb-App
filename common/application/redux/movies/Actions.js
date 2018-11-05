import * as Types from './Types';

//=============== Async Movie List ===============//
export function requestMovieList(channel) {
    return {
        type: Types.API_REQUEST_MOVIE_LIST,
        channel,
    }
}

export function successMovieList(channel, json) {
    return {
        type: Types.API_SUCCESS_MOVIE_LIST,
        channel,
        data: json,
    }
}

export function errorMovieList(channel, message) {
    return {
        type: Types.API_ERROR_MOVIE_LIST,
        channel,
        message,
    }
}

//=============== Async Movie Detail ===============//
export function requestMovieDetail() {
    return {
        type: Types.API_REQUEST_MOVIE_DETAIL,
    }
}

export function successMovieDetail(json, message) {
    return {
        type: Types.API_SUCCESS_MOVIE_DETAIL,
        data: json,
        message: message,
    }
}

export function errorMovieDetail(message) {
    return {
        type: Types.API_ERROR_MOVIE_DETAIL,
        message: message
    }
}

//=============== Async Movie Detail ===============//
export function setMovieSearchQuery(query) {
    return {
        type: Types.LOCAL_MOVIE_SEARCH_QUERY,
        query,
    }
}