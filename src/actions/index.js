import axios from 'axios';
import { FETCH_USERS } from './actionTypes';

export const fetchUsers = () => {
    return async (dispatch) => {
        const result = await axios.get(
            'http://react-ssr-api.herokuapp.com/users'
        );

        dispatch({
            type: FETCH_USERS,
            payload: result.data
        });
    };
};
