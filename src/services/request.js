import axios from 'axios';

const URL = 'http://localhost:50350/api';

export const getCourses = () => {
    try {
         return axios.get(URL + '/Courses');
    } catch (error) {
        console.log(error);
    }
}