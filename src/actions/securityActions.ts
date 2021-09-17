import axios from "axios";
import setJWTToken from "../security-utils/jwt-token";
import {GET_ERRORS, SET_CURRENT_USER} from "./types";
import jwt_decode from 'jwt-decode';

export const createNewUser = (newUser: any, history: any) => async (dispatch: any) => {
    try {
        await axios.post('/api/users/register', newUser);
        history.push('/login');
        dispatch({
            type: GET_ERRORS,
            payload: {}
        });
    } catch (err: any) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
};

export const login = (loginRequest: any) => async (dispatch: any) => {
    try {
        const res = await axios.post('/api/users/login', loginRequest);
        const {token} = res.data;
        localStorage.setItem('jwt_token', token);
        setJWTToken(token);
        const decodedToken = jwt_decode(token);

        dispatch({
            type: SET_CURRENT_USER,
            payload: decodedToken
        });
    } catch (e: any) {
        dispatch({
            type: GET_ERRORS,
            payload: e.response.data
        });
    }
};

export const logout = () => async (dispatch: any) => {
    localStorage.removeItem("jwt_token");
    setJWTToken(false);
    dispatch({
        type: SET_CURRENT_USER,
        payload: {}
    });
}