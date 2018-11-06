import { connect } from 'react-redux';
import * as MovieAPI from '../../api/MovieAPI';
import * as MovieActions from '../../redux/movies/Actions';
import SearchBarMovie from '../components/SearchBarMovie';

function asyncSearchMovies(query, page) {
    return dispatch => {
        dispatch(MovieActions.setMovieSearchQuery(query));
        dispatch(MovieActions.requestMovieList('movie_list'));

        return MovieAPI.getMovieList(query, page).then((result) => {
            if (result.status === 200) {
                const resultData = result.data.Search;

                dispatch(MovieActions.successMovieList('movie_list', resultData));
            }
        }).catch((error) => {
            const errorMessage = "";

            dispatch(MovieActions.successMovieList('movie_list', errorMessage));
        });
    };
}


const mapStateToProps = (state) => {
    const movieSearch = state.Movies.movieSearch;

    return {
        movieSearch: (movieSearch.query === undefined) ? "" : movieSearch.query,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        asyncSearchMovies: (query, page) => dispatch(asyncSearchMovies(query, page)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SearchBarMovie);