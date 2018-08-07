import { createMemoryHistory } from 'history';
import {compose, createStore, applyMiddleware} from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';


export default function configureStoreServer(initialState) {   
    
    const history = createMemoryHistory();
    const middlewareHistory = routerMiddleware(history);
 
    return createStore(
        connectRouter(history)(rootReducer), // new root reducer with router state
        initialState,
        compose(
            applyMiddleware(
                thunk,
                middlewareHistory, // for dispatching history actions
                reduxImmutableStateInvariant()
            )
        )
    );
}