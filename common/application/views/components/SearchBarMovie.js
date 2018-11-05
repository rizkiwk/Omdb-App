import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';

class SearchBarMovie extends React.PureComponent {

    render() {
        return(
            <SearchBar 
                lightTheme
                containerStyle={styles.searchbar_container}
                placeholder="Type Here..."
                onChangeText={(text) => this.__onHandleSearchBar(text)}
            />
        );
    }

    // handleSearchBar
    __onHandleSearchBar = (query) => {
        if (query.length > 0) {
            if (query.length >= 3) {
                this.props.asyncSearchMovies(query, 1);
            }
        } else {
            this.props.asyncSearchMovies(query, 1);
        }
    }

}

const styles = StyleSheet.create({
    searchbar_container: {
        width: '100%',
        borderTopWidth: 0,
        borderBottomWidth: 0,
        backgroundColor: 'transparent',
    },
});

SearchBarMovie.propTypes    = {
    asyncSearchMovies: PropTypes.func.isRequired,
    movieSearch: PropTypes.string.isRequired,
}

export default SearchBarMovie;