import React, { useEffect } from 'react';
import Cards from '../components/CourseCards';
import {useSelector, useDispatch} from 'react-redux';
import {getCoursesSaga} from '../actions/coursesActions';

export default function Courses(){
    const courses = useSelector(state => state.data);
    const dispatch = useDispatch();

    function getCourses() {
        dispatch(getCoursesSaga());
    }

    useEffect(() => {
        getCourses()
    });

    return(
        <>
            <Cards courses={courses}/>
        </>
    )
}