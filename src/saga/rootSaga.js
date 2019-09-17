import {all} from 'redux-saga/effects';
import {watchAllCourses} from '../saga/coursesSaga';


export function* rootSaga(){
    yield all([
        watchAllCourses()
    ])
}