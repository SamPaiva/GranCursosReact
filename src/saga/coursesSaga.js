import {takeLatest, put, call} from 'redux-saga/effects';
import * as actions from '../actions/sagaActionsConstants';
import * as types from '../reducers/reducerActionTypes';
import {getCourses} from '../services/request';

export function* getCoursesAsync(){
    
    const response = yield call(getCourses);

    yield put({type: types.GET_COURSES, payload: {response}});
}


export function* watchAllCourses(){
    yield takeLatest(actions.GET_COURSES_SAGA, getCoursesAsync);
}