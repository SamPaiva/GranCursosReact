import React, { useEffect } from 'react';
import Cards from '../components/CourseCards';
import { useSelector, useDispatch } from 'react-redux';
import { getCoursesSaga } from '../actions/coursesActions';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import styles from '../styles/courses';

export default function Courses() {
    const classes = styles();
    const courses = useSelector(state => state.courses.courses);
    const dispatch = useDispatch();

    function getCourses() {
        dispatch(getCoursesSaga());
    }

    useEffect(() => {
        getCourses()
    });

    return (
        <Container className={classes.root}>
            <Grid container direction="row" item xs={12}>
                <Cards courses={courses} />
            </Grid>
        </Container>

    );
}