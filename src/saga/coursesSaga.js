import {takeLatest, put, call} from 'redux-saga/effects';
import * as actions from './sagaActionsConstants';
import {getCourses} from '../services/request';

const GET_COURSES = 'GET_COURSES';

export function* getCoursesAsync(){

    const response = yield call(getCourses);
    yield put({type: GET_COURSES, payload: response.data});
}


export function* watchAllCourses(){
    yield takeLatest(actions.GET_COURSES_SAGA, getCoursesAsync);
}