import axios from "axios";
import { GET_ERRORS } from "./types";

export const createNewUser = (newUser: any, history: any) => async (dispatch:any) => {
    try {
        await axios.post('/api/users/register', newUser);
        history.push('/login');
        dispatch({
            type:GET_ERRORS,
            payload: {}
        });
    } catch (err:any) {
        dispatch({
            type:GET_ERRORS,
            payload: err.response.data
        });
    }
};