import * as actions from '../saga/sagaActionsConstants';

export const getCoursesSaga = () => {
    return ({type: actions.GET_COURSES_SAGA})
}