import { connect } from 'react-redux';
import * as MovieAPI from '../../api/MovieAPI';
import * as MovieActions from '../../redux/movies/Actions';
import GridListMovies from '../components/GridListMovies';

function asyncMovieList(query, page) {
    return dispatch => {
        dispatch(MovieActions.requestMovieList('movie_list'));

        return MovieAPI.getMovieList(query, page).then((result) => {
            if (result.status === 200) {
                const resultData    = result.data.Search;

                dispatch(MovieActions.successMovieList('movie_list', resultData));
            }
        }).catch((error) => {
            const errorMessage = "";

            dispatch(MovieActions.successMovieList('movie_list', errorMessage));
        });
    };
}


const mapStateToProps = (state) => {
    const movieSearch   = state.Movies.movieSearch;
    const movieList     = state.Movies.moviesByChannel.movie_list;

    return {
        movieSearch: (movieSearch.query === undefined) ? "" : movieSearch.query,
        movies: (movieList === undefined) ? null : movieList.payload,
        errorMessage: (movieList === undefined) ? null : movieList.message,
        loading: (movieList === undefined) ? null : movieList.loading,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        asyncMovieList: (query, page) => dispatch(asyncMovieList(query, page)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GridListMovies);