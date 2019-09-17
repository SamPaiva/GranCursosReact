import * as actions from '../actions/sagaActionsConstants';

export const getCoursesSaga = () => {
    return ({type: actions.GET_COURSES_SAGA})
}