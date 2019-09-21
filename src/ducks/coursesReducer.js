import {createActions, createReducer} from 'reduxsauce';

export const {Types, Creators} = createActions({
    getCourses: ['']
})

const initialState = {
    courses: []
}

const getCourses = (state = initialState, action) => {
    state.courses = action.payload
    return state;
}

export default createReducer(initialState, {
    [Types.GET_COURSES]: getCourses
});