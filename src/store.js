import {rootReducer} from "./reducers/index";
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

export function configureStore() {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    return store;
}