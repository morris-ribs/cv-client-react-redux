import { createBrowserHistory } from 'history';
import {compose, createStore, applyMiddleware} from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

const history = createBrowserHistory();

export default function configureStore(initialState) {
    return createStore(
        connectRouter(history)(rootReducer), // new root reducer with router state
        initialState,
        compose(
            applyMiddleware(
                thunk,
                routerMiddleware(history), // for dispatching history actions
                reduxImmutableStateInvariant()
            )
        )
    );
}