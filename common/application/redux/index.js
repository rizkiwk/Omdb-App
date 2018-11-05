import { combineReducers, createStore, applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import Movies from './movies';

const appReducer = combineReducers({
    Movies,
});

const loggerMiddleware  = createLogger();

const AppStore = () => {
    return createStore (
        appReducer,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware,
        )
    );
}

export default AppStore;
