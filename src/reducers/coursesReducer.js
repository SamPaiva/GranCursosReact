import * as actions from './reducerActionTypes';

const initialState = {
    courses: []
}

function coursesReducer(state = initialState, action){
    switch(action.type){
        case actions.GET_COURSES:
            state.courses = action.payload
            return {...state, data: [...state.courses]};
        default:
            return state;
    }
}

export default coursesReducer;