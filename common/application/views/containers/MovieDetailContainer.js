import { connect } from 'react-redux';
import * as MovieAPI from '../../api/MovieAPI';
import * as MovieActions from '../../redux/movies/Actions';
import ContentMovie from '../components/ContentMovie';

function asyncMovieDetail(movieId) {
    return dispatch => {
        dispatch(MovieActions.requestMovieDetail());

        return MovieAPI.getMovieDetail(movieId).then((result) => {
            if (result.status === 200) {
                const resultData    = result.data;
                const resultMessage = "";
                
                dispatch(MovieActions.successMovieDetail(resultData, resultMessage));
            }
        }).catch((error) => {
            const errorMessage = "";
            
            dispatch(MovieActions.successMovieDetail(errorMessage));
        });
    };
}

const mapStateToProps = (state) => {
    const movieDetail = state.Movies.movieById;
    
    return {
        data: (movieDetail.payload === undefined) ? null : movieDetail.payload,
        errorMessage: (movieDetail.message === undefined) ? null : movieDetail.message,
        loading: (movieDetail.loading === undefined) ? null : movieDetail.loading,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        async: (movieId) => dispatch(asyncMovieDetail(movieId)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContentMovie);