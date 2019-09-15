import * as actions from '../constants/sagaActionsConstants';

export const getCoursesSaga = () => {
    return ({type: actions.GET_COURSES_SAGA})
}