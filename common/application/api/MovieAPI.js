import Axios from 'axios';

export function getMovieList(query, page) {
    const search    = (query === undefined || query === null || query === "") ? "Batman" : query;

    return new Axios({
        method: 'get',
        url: 'http://www.omdbapi.com/?apikey=faf7e5bb&s=' + search + '&page=' + page,
        responseType: 'json',
    })
}

export function getMovieDetail(movieId) {
    return new Axios({
        method: 'get',
        url: 'http://www.omdbapi.com/?apikey=faf7e5bb&i='+movieId,
        responseType: 'json',
    })
}