import {createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import courses from '../reducers/coursesReducer';

import {rootSaga} from '../saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
    courses
});

const store = createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga);

export default store;