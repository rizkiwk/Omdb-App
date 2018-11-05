import React from 'react';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';
import { Layout, Color } from '../../constant';

import { StyleSheet, View, FlatList, Image, TouchableOpacity, RefreshControl } from 'react-native';
import { Spinner } from 'native-base';
import FastImage from 'react-native-fast-image';
import TextRoboto from '../components/TextRoboto';
import ModalOverlay from './ModalOverlay';

class GridListMovies extends React.Component {

    constructor(props) {
        super(props);

        this.state  = {
            showPullRefresh: false,
            showModalImage: false,
            modalImage: null,
            modalImageWidth: 0,
            modalImageHeight: 0,
        };
    }

    componentDidMount() {
        this.props.asyncMovieList(this.props.movieSearch, 1);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.movies !== null) this.setState({ showPullRefresh: false });
    }

    render() {
        return(
            <View style={styles.main_content}>
                { this.props.loading && <Spinner size="large" color={Color.primary_black} /> }

                { this.props.movies !== null && this._renderGridListMovie() }

                <ModalOverlay 
                    visible={this.state.showModalImage}
                    renderComponent={this._renderModalImageComponent()}
                />
            </View>
        );
    }

    //=================== Render Method ==============================================================================

    _renderGridListMovie    = () => {
        return(
            <FlatList 
                numColumns={2}
                data={this.props.movies}
                keyExtractor={this.__keyGridItemMovie}
                renderItem={this._renderGridItemMovie}
                contentContainerStyle={styles.grid_container}
                columnWrapperStyle={styles.grid_column_wrapper}
                refreshControl={this._renderPullRefresh()}
                onEndReachedThreshold={0.5}
                onEndReached={this.__onLoadMore}
            />
        );
    }

    _renderGridItemMovie    = ({ item }) => {
        return(
            <View key={item.imdbID} style={styles.griditem_container}>
                { item.Poster == "N/A" && this._renderEmptyMoviePoster() }

                { item.Poster != "N/A" && 
                    <TouchableOpacity style={styles.griditem_poster_wrapper} onPress={() => this.__onClickItemMoviePoster(item.Poster)}>
                        <FastImage 
                            style={styles.griditem_poster} 
                            source={{ uri: item.Poster, priority: FastImage.priority.normal }}
                            resizeMode={FastImage.resizeMode.cover} 
                        />
                    </TouchableOpacity>
                }

                <TouchableOpacity style={styles.griditem_title_wrapper} onPress={() => this.__routeMovieDetail(item.imdbID)}>
                    <TextRoboto fontStyle="bold" style={styles.griditem_title}>{ item.Title }</TextRoboto>
                </TouchableOpacity>
            </View>
        );
    }

    _renderModalImageComponent   = () => {
        const { modalImage, modalImageWidth, modalImageHeight }    = this.state;
        
        return(
            <FastImage 
                style={{ width: modalImageWidth, height: modalImageHeight }} 
                source={{ uri: modalImage, priority: FastImage.priority.normal }} 
                resizeMode={FastImage.resizeMode.contain} 
            />
        );
    }

    _renderEmptyMoviePoster = () => {
        return(
            <View style={styles.griditem_poster_empty_wrapper}>
                <TextRoboto fontStyle="regular" style={styles.griditem_poster_empty_text}>Image not found</TextRoboto>
            </View>
        );
    }

    _renderPullRefresh = () => {
        return(
            <RefreshControl
                tintColor={Color.primary_black}
                refreshing={this.state.showPullRefresh}
                onRefresh={this.onPullRefresh.bind(this)}
            />
        );
    };

    //=================== Listener Method ============================================================================

    __keyGridItemMovie  = (item) => item.imdbID;

    __onClickItemMoviePoster    = (urlImage) => {
        Image.getSize(urlImage, (width, height) => {
            this.setState({ showModalImage: true, modalImage: urlImage, modalImageWidth: width, modalImageHeight: height });
        });
    }

    onPullRefresh   = () => {
        this.setState({ showPullRefresh: true });
        this.props.asyncMovieList(this.props.movieSearch, 1);
    };

    __onLoadMore    = ({distanceFromEnd}) => {
        if (distanceFromEnd == 0) {
            console.log('__onLoadMore: ' + JSON.stringify(distanceFromEnd));
        }
    };

    __routeMovieDetail  = (movieId) => {
        const movieDetailAction = NavigationActions.navigate({
            routeName: 'DETAIL_SCREEN',
            params: { movieId },
        });

        this.props.navigation.dispatch(movieDetailAction);
    }

}

const styles    = StyleSheet.create({
    main_content: {
        flex: 1,
    },
    grid_container: {
        paddingVertical: 10,
        paddingHorizontal: Layout.isMediumDevice ? 20 : (Layout.isSmallDevice ? 15 : 25),
    },
    grid_column_wrapper: {
        justifyContent: 'space-around',
        marginVertical: 5,
    },
    griditem_container: {
        width: Layout.isMediumDevice ? 140 : (Layout.isSmallDevice ? 125 : 167),
    },
    griditem_poster_wrapper: {
        width: '100%',
        height: Layout.isMediumDevice ? 180 : (Layout.isSmallDevice ? 125 : 167),
        marginBottom: 10,
    },
    griditem_poster: {
        width: '100%',
        height: '100%',
    },
    griditem_poster_empty_wrapper: {
        flex: 1,
        height: Layout.isMediumDevice ? 180 : (Layout.isSmallDevice ? 125 : 167),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: Color.primary_grey,
    },
    griditem_poster_empty_text: {
        fontSize: 14,
        color: Color.primary_black,
    },
    griditem_title_wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    griditem_title: {
        textAlign: 'center',
        fontSize: 14,
    },
});

GridListMovies.propTypes    = {
    movieSearch: PropTypes.string.isRequired,
    movies: PropTypes.arrayOf(PropTypes.shape({
        imdbID: PropTypes.string.isRequired,
        Title: PropTypes.string.isRequired,
        Type: PropTypes.string.isRequired,
        Year: PropTypes.string.isRequired,
        Poster: PropTypes.string.isRequired,
    })),
    errorMessage: PropTypes.string,
    loading: PropTypes.bool,
    asyncMovieList: PropTypes.func.isRequired,
}

export default GridListMovies;