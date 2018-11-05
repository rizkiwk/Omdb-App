import React from 'react';
import PropTypes from 'prop-types';
import Color from '../../constant/Color';
import Layout from '../../constant/Layout';

import { StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import TextRoboto from '../components/TextRoboto';

class ContentMovie extends React.Component {

    constructor(props) {
        super(props);

        this.state  = {
            paramMovieId: null,
        };
    }

    componentWillMount() {
        const { params }    = this.props.navigation.state;
        
        if (params.movieId !== undefined) this.setState({ paramMovieId: params.movieId });
    }

    componentDidMount() {
        this.props.async(this.state.paramMovieId);
    }

    render() {
        const movieTitle        = (this.props.data !== null) ? this.props.data.Title : "";
        const moviePlot         = (this.props.data !== null) ? this.props.data.Plot : null;
        const moviePoster       = (this.props.data !== null) ? this.props.data.Poster : "N/A";
        const movieGenre        = (this.props.data !== null) ? this.props.data.Genre : "";
        const movieRuntime      = (this.props.data !== null) ? this.props.data.Runtime : "";
        const movieReleased     = (this.props.data !== null) ? this.props.data.Released : "";
        const movieActors       = (this.props.data !== null) ? this.props.data.Actors : "";
        const movieDirector     = (this.props.data !== null) ? this.props.data.Director : "";
        const movieWriter       = (this.props.data !== null) ? this.props.data.Writer : "";
        const movieRated        = (this.props.data !== null) ? this.props.data.Rated : "";
        const movieSource       = (this.props.data !== null) ? this.props.data.Ratings[0].Source : "";
        const movieRating       = (this.props.data !== null) ? this.props.data.Ratings[0].Value : "";
        const movieVotes        = (this.props.data !== null) ? this.props.data.imdbVotes : "";
        const movieProduction   = (this.props.data !== null) ? this.props.data.Production : "";
        const movieType         = (this.props.data !== null) ? this.props.data.Type : "";
        const movieBoxOffice    = (this.props.data !== null) ? this.props.data.BoxOffice : "";
        const movieDVD          = (this.props.data !== null) ? this.props.data.DVD : "";
        const movieYear         = (this.props.data !== null) ? this.props.data.Year : "";
        const movieLanguage     = (this.props.data !== null) ? this.props.data.Language : "";
        const movieCountry      = (this.props.data !== null) ? this.props.data.Country : "";
        const movieWebsite      = (this.props.data !== null) ? this.props.data.Website : "";

        return(
            <View>
                <View style={[styles.contenttop_wrapper, styles.sectionbox]}>
                    <View style={styles.movie_poster_wrapper}>
                        { moviePoster == "N/A" && this._renderEmptyMoviePoster() }

                        { moviePoster != "N/A" && 
                            <FastImage 
                                style={styles.movie_poster} 
                                source={{ uri: moviePoster, priority: FastImage.priority.normal, }}
                                resizeMode={FastImage.resizeMode.contain} 
                            /> 
                        }
                    </View>

                    <View style={styles.movie_info_wrapper}>
                        <TextRoboto fontStyle="bold" style={styles.movie_info_title}>{ movieTitle }</TextRoboto>
                        <TextRoboto fontStyle="regular" style={styles.movie_info_plot}>{ moviePlot }</TextRoboto>
                    </View>
                </View>
                
                <View style={styles.sectionbox}>
                    <View style={styles.sectionbox_column}>
                        <TextRoboto fontStyle="bold" style={styles.movie_col_label}>Genre:</TextRoboto>
                        <TextRoboto fontStyle="regular" style={styles.movie_col_value}>{ movieGenre }</TextRoboto>
                    </View>

                    <View style={styles.sectionbox_column}>
                        <TextRoboto fontStyle="bold" style={styles.movie_col_label}>Runtime:</TextRoboto>
                        <TextRoboto fontStyle="regular" style={styles.movie_col_value}>{ movieRuntime }</TextRoboto>
                    </View>

                    <View style={styles.sectionbox_column}>
                        <TextRoboto fontStyle="bold" style={styles.movie_col_label}>Released:</TextRoboto>
                        <TextRoboto fontStyle="regular" style={styles.movie_col_value}>{ movieReleased }</TextRoboto>
                    </View>

                    <View style={styles.sectionbox_column}>
                        <TextRoboto fontStyle="bold" style={styles.movie_col_label}>Actors:</TextRoboto>
                        <TextRoboto fontStyle="regular" style={styles.movie_col_value}>{ movieActors }</TextRoboto>
                    </View>

                    <View style={styles.sectionbox_column}>
                        <TextRoboto fontStyle="bold" style={styles.movie_col_label}>Director:</TextRoboto>
                        <TextRoboto fontStyle="regular" style={styles.movie_col_value}>{ movieDirector }</TextRoboto>
                    </View>

                    <View style={styles.sectionbox_column}>
                        <TextRoboto fontStyle="bold" style={styles.movie_col_label}>Writer:</TextRoboto>
                        <TextRoboto fontStyle="regular" style={styles.movie_col_value}>{ movieWriter }</TextRoboto>
                    </View>
                </View>

                <View style={styles.sectionbox}>
                    <View style={styles.sectionbox_column}>
                        <TextRoboto fontStyle="bold" style={styles.movie_col_label}>Rated:</TextRoboto>
                        <TextRoboto fontStyle="regular" style={styles.movie_col_value}>{ movieRated }</TextRoboto>
                    </View>

                    <View style={styles.sectionbox_column}>
                        <TextRoboto fontStyle="bold" style={styles.movie_col_label}>Source:</TextRoboto>
                        <TextRoboto fontStyle="regular" style={styles.movie_col_value}>{ movieSource }</TextRoboto>
                    </View>

                    <View style={styles.sectionbox_column}>
                        <TextRoboto fontStyle="bold" style={styles.movie_col_label}>Rating:</TextRoboto>
                        <TextRoboto fontStyle="regular" style={styles.movie_col_value}>{ movieRating }</TextRoboto>
                    </View>
                    <View style={styles.sectionbox_column}>
                        <TextRoboto fontStyle="bold" style={styles.movie_col_label}>Votes:</TextRoboto>
                        <TextRoboto fontStyle="regular" style={styles.movie_col_value}>{ movieVotes }</TextRoboto>
                    </View>
                </View>

                <View style={styles.sectionbox}>
                    <View style={styles.sectionbox_column}>
                        <TextRoboto fontStyle="bold" style={styles.movie_col_label}>Production:</TextRoboto>
                        <TextRoboto fontStyle="regular" style={styles.movie_col_value}>{ movieProduction }</TextRoboto>
                    </View>

                    <View style={styles.sectionbox_column}>
                        <TextRoboto fontStyle="bold" style={styles.movie_col_label}>Type:</TextRoboto>
                        <TextRoboto fontStyle="regular" style={styles.movie_col_value}>{ movieType }</TextRoboto>
                    </View>

                    <View style={styles.sectionbox_column}>
                        <TextRoboto fontStyle="bold" style={styles.movie_col_label}>BoxOffice:</TextRoboto>
                        <TextRoboto fontStyle="regular" style={styles.movie_col_value}>{ movieBoxOffice }</TextRoboto>
                    </View>

                    <View style={styles.sectionbox_column}>
                        <TextRoboto fontStyle="bold" style={styles.movie_col_label}>DVD:</TextRoboto>
                        <TextRoboto fontStyle="regular" style={styles.movie_col_value}>{ movieDVD }</TextRoboto>
                    </View>
                </View>

                <View style={styles.sectionbox}>
                    <View style={styles.sectionbox_column}>
                        <TextRoboto fontStyle="bold" style={styles.movie_col_label}>Year:</TextRoboto>
                        <TextRoboto fontStyle="regular" style={styles.movie_col_value}>{ movieYear }</TextRoboto>
                    </View>

                    <View style={styles.sectionbox_column}>
                        <TextRoboto fontStyle="bold" style={styles.movie_col_label}>Language:</TextRoboto>
                        <TextRoboto fontStyle="regular" style={styles.movie_col_value}>{ movieLanguage }</TextRoboto>
                    </View>

                    <View style={styles.sectionbox_column}>
                        <TextRoboto fontStyle="bold" style={styles.movie_col_label}>Country:</TextRoboto>
                        <TextRoboto fontStyle="regular" style={styles.movie_col_value}>{ movieCountry }</TextRoboto>
                    </View>

                    <View style={styles.sectionbox_column}>
                        <TextRoboto fontStyle="bold" style={styles.movie_col_label}>Website:</TextRoboto>
                        <TextRoboto fontStyle="regular" style={styles.movie_col_value}>{ movieWebsite }</TextRoboto>
                    </View>
                </View>
            </View>
        );
    }

    _renderEmptyMoviePoster = () => {
        return(
            <View style={styles.movie_poster_empty_wrapper}>
                <TextRoboto fontStyle="regular" style={styles.movie_poster_empty_text}>Image not found</TextRoboto>
            </View>
        );
    }

}

const styles    = StyleSheet.create({
    contenttop_wrapper: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Color.primary_white,
    },
    sectionbox: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginBottom: 20,
        shadowOffset:{ width: 0.5, height: 1 },
        shadowColor: 'rgba(0,0,0,0.9)',
        shadowOpacity: 0.5,
        backgroundColor: Color.primary_white,
    },
    sectionbox_title: {
        flex: 1,
    },
    sectionbox_column: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 10,
    },
    movie_poster_wrapper: {
        width: 120,
        height: 170,
        marginRight: 10,
    },
    movie_poster: {
        width: '100%',
        height: '100%',
    },
    movie_poster_empty_wrapper: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.primary_grey,
    },
    movie_poster_empty_text: {
        fontSize: 14,
        color: Color.primary_black,
    },
    movie_info_wrapper: {
        flex: 1,
    },
    movie_info_title: {
        marginBottom: 10,
        fontSize: 16,
    },
    movie_info_plot: {
        marginBottom: 10,
        fontSize: 14,
    },
    movie_col_label: {
        width: Layout.isMediumDevice ? 100 : (Layout.isSmallDevice ? 80 : 120),
        fontSize: 14,
        marginRight: 10,
    },
    movie_col_value: {
        flex: 1,
        fontSize: 12,
    },
});

ContentMovie.propTypes  = {
    data: PropTypes.object,
    async: PropTypes.func,
}

export default ContentMovie;